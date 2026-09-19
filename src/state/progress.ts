import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { levels as courseLevels } from '../content/levels';

// User progress is persisted to localStorage for the prototype.
// The shape mirrors the planned Supabase tables (user_progress, user_vocabulary,
// streaks, daily_goals, user_achievements) so it can be synced later.

export interface LevelProgress {
  completed: boolean;
  stars: 0 | 1 | 2 | 3;
  bestScore: number; // 0–100
  attempts: number;
}

export interface VocabMastery {
  score: 0 | 1 | 2 | 3 | 4 | 5; // 0 New · 1 Seen · 2 Recognized · 3 Practicing · 4 Strong · 5 Mastered
  correct: number;
  wrong: number;
  lastSeen: string; // ISO date
  levelId: number;
}

export interface AchievementDef {
  id: string;
  icon: string;
  titleEn: string;
  titleCkb: string;
  descCkb: string;
}

export const achievements: AchievementDef[] = [
  { id: 'first-lesson', icon: '🏆', titleEn: 'First Lesson', titleCkb: 'وێلا وانەیێ', descCkb: 'وێلا وانەیێ تمامکە' },
  { id: 'ten-correct', icon: '🎯', titleEn: '10 Correct Answers', titleCkb: '١٠ بەرسڤێن راست', descCkb: '١٠ بەرسڤێن راست بدە' },
  { id: 'streak-7', icon: '🔥', titleEn: '7 Day Streak', titleCkb: 'حەفتەیەک پێ یەکتر', descCkb: 'حەفت ڕۆژان پێ یەکتر فێر بوو' },
  { id: 'words-100', icon: '📚', titleEn: '100 Words Learned', titleCkb: '١٠٠ پەیڤ', descCkb: '١٠٠ پەیڤان فێر بوو' },
  { id: 'first-speaking', icon: '🗣️', titleEn: 'First Speaking', titleCkb: 'وێلا ئاخفتنێ', descCkb: 'وێلا جارا ڕاهێنانا ئاخفتنێ بکە' },
  { id: 'perfect-level', icon: '🌟', titleEn: 'Perfect Level', titleCkb: 'ئاستا بێخەم', descCkb: 'ئاستەیەکێ ب خالا ١٠٠٪ تمامکە' },
  { id: 'five-levels', icon: '🌿', titleEn: '5 Levels Complete', titleCkb: '٥ ئاستێن تمامکری', descCkb: '٥ ئاستان تمامکە' },
  { id: 'course-done', icon: '🌳', titleEn: 'Course Complete', titleCkb: 'خول تمام بوو', descCkb: 'هەمی ٢٠ ئاستان تمامکە' },
];

interface ProgressState {
  // profile
  name: string;
  onboarded: boolean;
  // currencies
  xp: number;
  coins: number;
  // streak & daily goal
  streak: number;
  lastActiveDate: string; // YYYY-MM-DD
  dailyGoalMin: number;
  todayDate: string; // YYYY-MM-DD
  minutesToday: number;
  // settings
  soundOn: boolean;
  reducedMotion: boolean;
  // progress
  levels: Record<number, LevelProgress>;
  vocabMastery: Record<string, VocabMastery>;
  totalCorrect: number;
  totalAnswers: number;
  hasSpoken: boolean;
  unlockedAchievements: string[];
  lastDailyChallenge: string; // YYYY-MM-DD, '' = not done today
  // actions
  setName: (name: string) => void;
  completeOnboarding: (name: string) => void;
  recordAnswer: (vocabIds: string[], correct: boolean, levelId: number) => void;
  addXp: (n: number) => void;
  addCoins: (n: number) => void;
  addStudyMinutes: (n: number) => void;
  completeLevel: (levelId: number, score: number) => void;
  completeDailyChallenge: () => void;
  markSpoken: () => void;
  setDailyGoal: (min: number) => void;
  setSoundOn: (on: boolean) => void;
  setReducedMotion: (on: boolean) => void;
  resetProgress: () => void;
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

const initialData = {
  name: '',
  onboarded: false,
  xp: 0,
  coins: 0,
  streak: 0,
  lastActiveDate: '',
  dailyGoalMin: 10,
  todayDate: today(),
  minutesToday: 0,
  soundOn: true,
  reducedMotion: false,
  levels: {} as Record<number, LevelProgress>,
  vocabMastery: {} as Record<string, VocabMastery>,
  totalCorrect: 0,
  totalAnswers: 0,
  hasSpoken: false,
  unlockedAchievements: [] as string[],
  lastDailyChallenge: '',
};

function checkAchievements(s: ProgressState): string[] {
  const has = new Set(s.unlockedAchievements);
  const earned: string[] = [];
  const grant = (id: string, condition: boolean) => {
    if (condition && !has.has(id)) {
      has.add(id);
      earned.push(id);
    }
  };
  grant('first-lesson', Object.values(s.levels).some((l) => l.completed));
  grant('ten-correct', s.totalCorrect >= 10);
  grant('streak-7', s.streak >= 7);
  grant('words-100', Object.keys(s.vocabMastery).length >= 100);
  grant('first-speaking', s.hasSpoken);
  grant('perfect-level', Object.values(s.levels).some((l) => l.bestScore >= 100));
  grant('five-levels', Object.values(s.levels).filter((l) => l.completed).length >= 5);
  grant('course-done', Object.values(s.levels).filter((l) => l.completed).length >= courseLevels.length);
  return earned;
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialData,

      setName: (name) => set({ name }),

      completeOnboarding: (name) => {
        const t = today();
        set({ name: name.trim() || 'خۆشەویست', onboarded: true, streak: 1, lastActiveDate: t, todayDate: t });
      },

      recordAnswer: (vocabIds, correct, levelId) => {
        const s = get();
        const t = today();
        // streak handling
        let { streak, lastActiveDate, minutesToday, todayDate } = s;
        if (lastActiveDate !== t) {
          streak = lastActiveDate === yesterday() ? streak + 1 : 1;
          lastActiveDate = t;
        }
        if (todayDate !== t) {
          todayDate = t;
          minutesToday = 0;
        }
        const vocabMastery = { ...s.vocabMastery };
        for (const id of vocabIds) {
          const prev = vocabMastery[id] ?? { score: 0, correct: 0, wrong: 0, lastSeen: t, levelId };
          let score = prev.score;
          if (correct) score = Math.min(5, score + 1) as VocabMastery['score'];
          else score = Math.max(1, score - 1) as VocabMastery['score'];
          vocabMastery[id] = {
            score,
            correct: prev.correct + (correct ? 1 : 0),
            wrong: prev.wrong + (correct ? 0 : 1),
            lastSeen: t,
            levelId,
          };
        }
        const next = {
          vocabMastery,
          streak,
          lastActiveDate,
          todayDate,
          minutesToday,
          totalCorrect: s.totalCorrect + (correct ? 1 : 0),
          totalAnswers: s.totalAnswers + 1,
        };
        set(next);
        const earned = checkAchievements(get());
        if (earned.length) set({ unlockedAchievements: [...get().unlockedAchievements, ...earned] });
      },

      addXp: (n) => set({ xp: get().xp + n }),
      addCoins: (n) => set({ coins: get().coins + n }),

      addStudyMinutes: (n) => {
        const s = get();
        const t = today();
        set({ todayDate: t, minutesToday: (s.todayDate === t ? s.minutesToday : 0) + n });
      },

      completeLevel: (levelId, score) => {
        const s = get();
        const passed = score >= 70;
        const prev = s.levels[levelId];
        const stars: LevelProgress['stars'] = score >= 100 ? 3 : score >= 85 ? 3 : score >= 70 ? 2 : score >= 50 ? 1 : 0;
        set({
          levels: {
            ...s.levels,
            [levelId]: {
              completed: prev?.completed || passed,
              stars: Math.max(prev?.stars ?? 0, stars) as LevelProgress['stars'],
              bestScore: Math.max(prev?.bestScore ?? 0, score),
              attempts: (prev?.attempts ?? 0) + 1,
            },
          },
        });
        const earned = checkAchievements(get());
        if (earned.length) set({ unlockedAchievements: [...get().unlockedAchievements, ...earned] });
      },

      completeDailyChallenge: () => {
        set({ lastDailyChallenge: today() });
        const earned = checkAchievements(get());
        if (earned.length) set({ unlockedAchievements: [...get().unlockedAchievements, ...earned] });
      },

      markSpoken: () => {
        set({ hasSpoken: true });
        const earned = checkAchievements(get());
        if (earned.length) set({ unlockedAchievements: [...get().unlockedAchievements, ...earned] });
      },

      setDailyGoal: (min) => set({ dailyGoalMin: min }),
      setSoundOn: (on) => set({ soundOn: on }),
      setReducedMotion: (on) => set({ reducedMotion: on }),
      resetProgress: () => set({ ...initialData, todayDate: today() }),
    }),
    { name: 'bahdini-progress-v1' },
  ),
);

// --- Derived selectors ---

export function isLevelUnlocked(levels: Record<number, LevelProgress>, levelId: number): boolean {
  if (levelId === 1) return true;
  return levels[levelId - 1]?.completed === true;
}

export function currentLevelId(levels: Record<number, LevelProgress>): number {
  for (let i = 1; i <= courseLevels.length; i++) {
    if (!levels[i]?.completed) return i;
  }
  return courseLevels.length;
}

// Simple spaced-repetition queue: words not yet mastered, weakest first.
export function reviewQueue(mastery: Record<string, VocabMastery>): string[] {
  return Object.entries(mastery)
    .filter(([, m]) => m.score < 5)
    .sort((a, b) => a[1].score - b[1].score || b[1].wrong - a[1].wrong)
    .map(([id]) => id);
}

export function wordsLearned(mastery: Record<string, VocabMastery>): number {
  return Object.keys(mastery).length;
}

export function accuracy(totalCorrect: number, totalAnswers: number): number {
  if (!totalAnswers) return 0;
  return Math.round((totalCorrect / totalAnswers) * 100);
}

// A level is "mastered" when it was passed well AND its vocabulary is strong in review.
export function isLevelMastered(
  levels: Record<number, LevelProgress>,
  mastery: Record<string, VocabMastery>,
  levelId: number,
): boolean {
  const prog = levels[levelId];
  if (!prog?.completed || prog.bestScore < 85) return false;
  const level = courseLevels.find((l) => l.id === levelId);
  if (!level) return false;
  return level.vocab.every((v) => (mastery[v.id]?.score ?? 0) >= 4);
}

export function todayString(): string {
  return today();
}
