import { useState } from 'react';
import { t } from '../i18n/ckb';
import { levels } from '../content/levels';
import { AuthPanel } from '../components/AuthPanel';
import { getSupabase } from '../lib/supabase';
import { accuracy, useProgress, wordsLearned } from '../state/progress';
import { ProgressBar, Screen, StatChip } from '../components/ui';

export function Profile() {
  const s = useProgress();
  const [confirmReset, setConfirmReset] = useState(false);
  const levelsDone = Object.values(s.levels).filter((l) => l.completed).length;
  const acc = accuracy(s.totalCorrect, s.totalAnswers);

  return (
    <Screen>
      <div className="flex items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-4xl">🧑‍🎓</div>
        <div>
          <h1 className="text-3xl font-black">{s.name}</h1>
          <p className="font-bold text-ink/60">
            {t.level} {Math.min(levels.length, levelsDone + 1)} · A1/A2
          </p>
        </div>
      </div>

      <h2 className="mt-6 text-xl font-black">{t.statsTitle}</h2>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <StatChip icon="⭐" value={s.xp} label={t.statXp} />
        <StatChip icon="🔥" value={s.streak} label={t.statStreak} />
        <StatChip icon="📚" value={wordsLearned(s.vocabMastery)} label={t.statWords} />
        <StatChip icon="✅" value={levelsDone} label={t.statLevels} />
      </div>

      <div className="card mt-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-black">🎯 {t.statAccuracy}</p>
          <p className="font-display font-black" dir="ltr">
            {acc}%
          </p>
        </div>
        <ProgressBar value={acc} max={100} />
      </div>

      <h2 className="mt-6 text-xl font-black">⚙️ {t.settingsTitle}</h2>
      <AuthPanel />
      <div className="card mt-2 flex flex-col gap-4">
        <div>
          <p className="mb-2 font-black">{t.dailyGoalPicker}</p>
          <div className="grid grid-cols-4 gap-2">
            {[5, 10, 15, 20].map((m) => (
              <button
                key={m}
                className={`option-btn !min-h-[44px] !py-2 ${s.dailyGoalMin === m ? 'border-brand-400 bg-brand-50' : ''}`}
                onClick={() => s.setDailyGoal(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-black">🔊 {t.soundLabel}</p>
          <button
            className={`rounded-full px-4 py-2 font-bold ${s.soundOn ? 'bg-brand-500 text-white' : 'bg-gray-200'}`}
            onClick={() => s.setSoundOn(!s.soundOn)}
          >
            {s.soundOn ? t.soundOn : t.soundOff}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-black">🎞️ {t.motionLabel}</p>
          <button
            className={`rounded-full px-4 py-2 font-bold ${s.reducedMotion ? 'bg-brand-500 text-white' : 'bg-gray-200'}`}
            onClick={() => s.setReducedMotion(!s.reducedMotion)}
          >
            {s.reducedMotion ? t.soundOn : t.soundOff}
          </button>
        </div>
      </div>

      <h2 className="mt-6 text-xl font-black text-red-600">{t.dangerZone}</h2>
      <div className="card mt-2 border-2 border-red-200">
        {!confirmReset ? (
          <button className="btn w-full bg-red-50 font-bold text-red-600" onClick={() => setConfirmReset(true)}>
            🗑️ {t.resetProgress}
          </button>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold text-red-600">{t.resetConfirm}</p>
            <div className="flex gap-2">
              <button
                className="btn flex-1 bg-red-500 text-white"
                onClick={() => {
                  void getSupabase().then((sb) => sb?.auth.signOut());
                  s.resetProgress();
                  window.location.reload();
                }}
              >
                {t.resetProgress}
              </button>
              <button className="btn-ghost flex-1" onClick={() => setConfirmReset(false)}>
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </Screen>
  );
}
