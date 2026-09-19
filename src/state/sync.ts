import { getSupabase } from '../lib/supabase';
import { useProgress, type LevelProgress, type VocabMastery } from './progress';

// Sync between the local (offline-first) progress store and Supabase.
// Local always keeps working; the cloud is merged in on sign-in and
// pushed (debounced) whenever progress changes.

let currentUserId: string | null = null;
let pushTimer: ReturnType<typeof setTimeout> | null = null;
let unsubscribeStore: (() => void) | null = null;
let syncing = false;

export function getCurrentUserId(): string | null {
  return currentUserId;
}

export function initSync(): void {
  void getSupabase().then((supabase) => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      currentUserId = data.session?.user.id ?? null;
      if (currentUserId) void pullAndMerge();
    });
    supabase.auth.onAuthStateChange((event, session) => {
      currentUserId = session?.user.id ?? null;
      if (event === 'SIGNED_IN' && currentUserId) {
        void pullAndMerge();
      }
      if (event === 'SIGNED_OUT') {
        stopPushSubscription();
      }
    });
    startPushSubscription();
  });
}

// --- Push ------------------------------------------------------------------

function startPushSubscription(): void {
  if (unsubscribeStore) return;
  unsubscribeStore = useProgress.subscribe(() => {
    if (!currentUserId || syncing) return;
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(() => void pushToCloud(), 2500);
  });
}

function stopPushSubscription(): void {
  unsubscribeStore?.();
  unsubscribeStore = null;
  if (pushTimer) clearTimeout(pushTimer);
  pushTimer = null;
}

export async function pushToCloud(): Promise<void> {
  const supabase = await getSupabase();
  if (!supabase || !currentUserId || syncing) return;
  syncing = true;
  try {
    const s = useProgress.getState();
    const uid = currentUserId;

    await supabase.from('profiles').upsert({
      id: uid,
      name: s.name,
      daily_goal_min: s.dailyGoalMin,
      sound_on: s.soundOn,
      reduced_motion: s.reducedMotion,
      updated_at: new Date().toISOString(),
    });

    await supabase.from('user_stats').upsert({
      user_id: uid,
      xp: s.xp,
      coins: s.coins,
      streak: s.streak,
      last_active_date: s.lastActiveDate || null,
      today_date: s.todayDate || null,
      minutes_today: s.minutesToday,
      total_correct: s.totalCorrect,
      total_answers: s.totalAnswers,
      has_spoken: s.hasSpoken,
      last_daily_challenge: s.lastDailyChallenge || null,
      updated_at: new Date().toISOString(),
    });

    const levelRows = Object.entries(s.levels).map(([levelId, p]: [string, LevelProgress]) => ({
      user_id: uid,
      level_id: Number(levelId),
      completed: p.completed,
      stars: p.stars,
      best_score: p.bestScore,
      attempts: p.attempts,
      updated_at: new Date().toISOString(),
    }));
    if (levelRows.length) await supabase.from('user_level_progress').upsert(levelRows);

    const vocabRows = Object.entries(s.vocabMastery).map(([vocabId, m]: [string, VocabMastery]) => ({
      user_id: uid,
      vocab_id: vocabId,
      level_id: m.levelId,
      score: m.score,
      correct: m.correct,
      wrong: m.wrong,
      last_seen: m.lastSeen,
      updated_at: new Date().toISOString(),
    }));
    // Upsert in chunks to stay under request limits.
    for (let i = 0; i < vocabRows.length; i += 200) {
      await supabase.from('user_vocabulary').upsert(vocabRows.slice(i, i + 200));
    }

    const achRows = s.unlockedAchievements.map((id) => ({ user_id: uid, achievement_id: id }));
    if (achRows.length) await supabase.from('user_achievements').upsert(achRows, { ignoreDuplicates: true });
  } finally {
    syncing = false;
  }
}

// --- Pull ------------------------------------------------------------------

export async function pullAndMerge(): Promise<void> {
  const supabase = await getSupabase();
  if (!supabase || !currentUserId) return;
  const uid = currentUserId;
  const local = useProgress.getState();

  const [profile, stats, levels, vocab, achievements] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', uid).maybeSingle(),
    supabase.from('user_stats').select('*').eq('user_id', uid).maybeSingle(),
    supabase.from('user_level_progress').select('*').eq('user_id', uid),
    supabase.from('user_vocabulary').select('*').eq('user_id', uid),
    supabase.from('user_achievements').select('*').eq('user_id', uid),
  ]);

  syncing = true; // don't immediately push back what we just pulled
  try {
    const patch: Partial<ReturnType<typeof useProgress.getState>> = {};

    if (profile.data) {
      patch.name = profile.data.name || local.name;
      patch.dailyGoalMin = profile.data.daily_goal_min ?? local.dailyGoalMin;
      patch.soundOn = profile.data.sound_on ?? local.soundOn;
      patch.reducedMotion = profile.data.reduced_motion ?? local.reducedMotion;
    }

    if (stats.data) {
      const c = stats.data;
      patch.xp = Math.max(c.xp ?? 0, local.xp);
      patch.coins = Math.max(c.coins ?? 0, local.coins);
      patch.streak = Math.max(c.streak ?? 0, local.streak);
      patch.lastActiveDate = (c.last_active_date as string) || local.lastActiveDate;
      patch.todayDate = (c.today_date as string) || local.todayDate;
      patch.minutesToday = Math.max(c.minutes_today ?? 0, local.minutesToday);
      patch.totalCorrect = Math.max(c.total_correct ?? 0, local.totalCorrect);
      patch.totalAnswers = Math.max(c.total_answers ?? 0, local.totalAnswers);
      patch.hasSpoken = Boolean(c.has_spoken) || local.hasSpoken;
      patch.lastDailyChallenge = (c.last_daily_challenge as string) || local.lastDailyChallenge;
    }

    if (levels.data) {
      const merged = { ...local.levels };
      for (const row of levels.data) {
        const prev = merged[row.level_id];
        merged[row.level_id] = {
          completed: Boolean(row.completed) || Boolean(prev?.completed),
          stars: Math.max(row.stars ?? 0, prev?.stars ?? 0) as LevelProgress['stars'],
          bestScore: Math.max(row.best_score ?? 0, prev?.bestScore ?? 0),
          attempts: Math.max(row.attempts ?? 0, prev?.attempts ?? 0),
        };
      }
      patch.levels = merged;
    }

    if (vocab.data) {
      const merged = { ...local.vocabMastery };
      for (const row of vocab.data) {
        const prev = merged[row.vocab_id];
        merged[row.vocab_id] = {
          score: Math.max(row.score ?? 0, prev?.score ?? 0) as VocabMastery['score'],
          correct: Math.max(row.correct ?? 0, prev?.correct ?? 0),
          wrong: Math.max(row.wrong ?? 0, prev?.wrong ?? 0),
          lastSeen: (row.last_seen as string) > (prev?.lastSeen ?? '') ? (row.last_seen as string) : (prev?.lastSeen ?? (row.last_seen as string)),
          levelId: row.level_id ?? prev?.levelId ?? 1,
        };
      }
      patch.vocabMastery = merged;
    }

    if (achievements.data) {
      patch.unlockedAchievements = [
        ...new Set([...local.unlockedAchievements, ...achievements.data.map((r) => r.achievement_id as string)]),
      ];
    }

    useProgress.setState(patch);
  } finally {
    syncing = false;
  }
  // Push the merged result back so both sides converge.
  void pushToCloud();
}

// --- Analytics ---------------------------------------------------------------

export async function trackEvent(event: string, payload: Record<string, unknown> = {}): Promise<void> {
  const supabase = await getSupabase();
  if (!supabase || !currentUserId) return;
  void supabase.from('analytics_events').insert({ user_id: currentUserId, event, payload });
}
