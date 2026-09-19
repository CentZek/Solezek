import { Link } from 'react-router-dom';
import { t } from '../i18n/ckb';
import { getLevel, levels } from '../content/levels';
import { currentLevelId, isLevelUnlocked, reviewQueue, todayString, useProgress } from '../state/progress';
import { ProgressBar, Screen, Stars, StatChip } from '../components/ui';

export function Home() {
  const s = useProgress();
  const current = currentLevelId(s.levels);
  const level = getLevel(current);
  const due = reviewQueue(s.vocabMastery).length;
  const goalDone = s.minutesToday >= s.dailyGoalMin;
  const completed = Object.values(s.levels).filter((l) => l.completed).length;

  return (
    <Screen>
      <h1 className="text-3xl font-black">{t.greeting(s.name)}</h1>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <StatChip icon="⭐" value={`${s.xp} XP`} />
        <StatChip icon="🔥" value={s.streak} label={t.streakDays(s.streak)} />
        <StatChip icon="🪙" value={s.coins} />
      </div>

      {level && (
        <Link to={`/lesson/${level.id}`} className="card mt-4 block bg-brand-500 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold opacity-80">
                {t.currentLevel} · {t.level} {level.id}
              </p>
              <p className="mt-1 text-2xl font-black">
                {level.icon} {level.titleCkb}
              </p>
              <p dir="ltr" className="font-display text-sm font-bold opacity-80">
                {level.titleEn}
              </p>
            </div>
            <span className="text-4xl">◀</span>
          </div>
          <div className="mt-3">
            <ProgressBar value={completed} max={levels.length} />
            <p className="mt-1 text-xs font-bold opacity-80" dir="ltr">
              {completed} / {levels.length}
            </p>
          </div>
          <div className="btn-accent mt-3 w-full text-center">{completed === 0 ? t.startLesson : t.continueLesson}</div>
        </Link>
      )}

      <div className="card mt-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-black">🎯 {t.dailyGoal}</p>
          <p className="text-sm font-bold text-ink/60" dir="ltr">
            {Math.min(s.minutesToday, s.dailyGoalMin)} / {s.dailyGoalMin} {t.minutesUnit}
          </p>
        </div>
        <ProgressBar value={s.minutesToday} max={s.dailyGoalMin} />
        {goalDone && <p className="mt-2 font-bold text-brand-600">{t.goalDone}</p>}
      </div>

      <Link to="/challenge" className={`card mt-4 flex items-center justify-between ${s.lastDailyChallenge === todayString() ? 'opacity-70' : 'bg-accent-light'}`}>
        <div>
          <p className="font-black">{t.dailyChallenge}</p>
          <p className="text-sm text-ink/60">{s.lastDailyChallenge === todayString() ? t.dailyChallengeDone : `${t.dailyChallengeBody} · ${t.challengeReward}`}</p>
        </div>
        {s.lastDailyChallenge !== todayString() && <span className="btn-primary !min-h-[40px] !px-4 !py-2 text-base">{t.startChallenge}</span>}
        {s.lastDailyChallenge === todayString() && <span className="text-3xl">✅</span>}
      </Link>

      {due > 0 && (
        <Link to="/review" className="card mt-4 flex items-center justify-between">
          <p className="font-black">🔄 {t.readyForReview(due)}</p>
          <span className="btn-ghost !min-h-[40px] !px-4 !py-2 text-base">{t.reviewNow}</span>
        </Link>
      )}

      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-black">🗺️ {t.coursePreview}</p>
          <Link to="/map" className="text-sm font-bold text-brand-600">
            {t.seeFullMap}
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {levels.slice(0, 8).map((l) => {
            const unlocked = isLevelUnlocked(s.levels, l.id);
            const prog = s.levels[l.id];
            return (
              <Link
                key={l.id}
                to={unlocked ? `/lesson/${l.id}` : '/map'}
                className={`card flex flex-col items-center gap-1 !p-2 text-center ${unlocked ? '' : 'opacity-40'}`}
              >
                <span className="text-2xl">{unlocked ? l.icon : '🔒'}</span>
                <span className="text-xs font-bold">{l.titleCkb}</span>
                {prog?.completed && <Stars n={prog.stars} size="text-xs" />}
              </Link>
            );
          })}
        </div>
      </div>
    </Screen>
  );
}
