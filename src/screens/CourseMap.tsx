import { Link } from 'react-router-dom';
import { t } from '../i18n/ckb';
import { levels } from '../content/levels';
import { isLevelMastered, isLevelUnlocked, useProgress } from '../state/progress';
import { Screen, Stars } from '../components/ui';

// Visual course map: a winding path where completed levels light up
// and locked ones stay muted.
export function CourseMap() {
  const s = useProgress();
  const completed = Object.values(s.levels).filter((l) => l.completed).length;

  return (
    <Screen>
      <h1 className="text-3xl font-black">🗺️ {t.mapTitle}</h1>
      <p className="mt-1 font-bold text-ink/60" dir="ltr">
        {completed} / {levels.length} · {s.xp} XP
      </p>

      <div className="mt-6 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-light text-3xl">🏠</div>
          <span className="mt-1 text-xs font-bold text-ink/60">{t.start}</span>
        </div>

        {levels.map((l, i) => {
          const unlocked = isLevelUnlocked(s.levels, l.id);
          const prog = s.levels[l.id];
          const mastered = isLevelMastered(s.levels, s.vocabMastery, l.id);
          const offset = i % 4 === 0 ? '-translate-x-16' : i % 4 === 2 ? 'translate-x-16' : '';
          return (
            <div key={l.id} className="flex flex-col items-center">
              <div className={`h-6 w-1 ${prog?.completed ? 'bg-brand-400' : 'bg-brand-100'}`} />
              <Link
                to={unlocked ? `/lesson/${l.id}` : '#'}
                aria-disabled={!unlocked}
                className={`flex flex-col items-center ${offset} ${unlocked ? '' : 'pointer-events-none'}`}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full border-4 text-3xl transition ${
                    mastered
                      ? 'border-accent bg-accent text-white'
                      : prog?.completed
                        ? 'border-brand-500 bg-brand-500 text-white'
                        : unlocked
                          ? 'animate-ring border-accent bg-white'
                          : 'border-gray-200 bg-gray-100 opacity-50 grayscale'
                  }`}
                >
                  {unlocked ? l.icon : '🔒'}
                </div>
                <span className={`mt-1 max-w-[110px] text-center text-xs font-bold ${unlocked ? '' : 'text-ink/40'}`}>
                  {l.id}. {l.titleCkb}
                </span>
                {mastered ? <span className="text-xs font-black text-accent-dark">{t.mastered}</span> : prog?.completed && <Stars n={prog.stars} size="text-sm" />}
                {!unlocked && <span className="text-[10px] font-bold text-ink/40">{t.locked}</span>}
              </Link>
            </div>
          );
        })}

        <div className="flex flex-col items-center">
          <div className="h-6 w-1 bg-brand-100" />
          <div className="text-5xl">🌳</div>
        </div>
      </div>
    </Screen>
  );
}
