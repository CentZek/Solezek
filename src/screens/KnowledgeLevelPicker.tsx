import { useState } from 'react';
import { t } from '../i18n/ckb';
import { useProgress } from '../state/progress';
import { useAuth } from '../hooks/useAuth';

export function KnowledgeLevelPicker() {
  const [knowLevel, setKnowLevel] = useState<string | null>(null);
  const completeOnboarding = useProgress((s) => s.completeOnboarding);
  const { user } = useAuth();
  const username = (user?.user_metadata?.username as string) || '';

  const finish = () => {
    if (!knowLevel) return;
    completeOnboarding(username, knowLevel);
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-10">
      <div className="text-center">
        <div className="text-6xl">🎯</div>
        <h1 className="mt-3 text-2xl font-black">{t.knowLevelQuestion}</h1>
      </div>
      <div className="card">
        <div className="grid grid-cols-1 gap-2">
          {t.knowLevels.map((k) => (
            <button
              key={k.id}
              className={`option-btn flex items-center gap-3 !text-base ${
                knowLevel === k.id ? 'border-brand-400 bg-brand-50' : ''
              }`}
              onClick={() => setKnowLevel(k.id)}
            >
              <span className="text-2xl">{k.icon}</span>
              {k.label}
            </button>
          ))}
        </div>
      </div>
      <button className="btn-primary w-full text-xl" onClick={finish} disabled={!knowLevel}>
        {t.start}
      </button>
    </div>
  );
}
