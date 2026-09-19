import { t } from '../i18n/ckb';
import { achievements, useProgress } from '../state/progress';
import { Screen } from '../components/ui';

export function Achievements() {
  const unlocked = useProgress((s) => s.unlockedAchievements);
  const set = new Set(unlocked);

  return (
    <Screen>
      <h1 className="text-3xl font-black">🏆 {t.achievementsTitle}</h1>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {achievements.map((a) => {
          const has = set.has(a.id);
          return (
            <div key={a.id} className={`card flex flex-col items-center gap-1 text-center ${has ? '' : 'opacity-50'}`}>
              <span className={`text-4xl ${has ? '' : 'grayscale'}`}>{a.icon}</span>
              <p className="font-black">{a.titleCkb}</p>
              <p dir="ltr" className="font-display text-xs font-bold text-ink/50">
                {a.titleEn}
              </p>
              <p className="text-xs text-ink/60">{has ? a.descCkb : t.achievementLocked}</p>
            </div>
          );
        })}
      </div>
    </Screen>
  );
}
