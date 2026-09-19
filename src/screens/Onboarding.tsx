import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from '../i18n/ckb';
import { useProgress } from '../state/progress';
import { AuthPanel } from '../components/AuthPanel';

export function Onboarding() {
  const [name, setName] = useState('');
  const [knowLevel, setKnowLevel] = useState<string | null>(null);
  const [stage, setStage] = useState<'profile' | 'phone'>('profile');
  const completeOnboarding = useProgress((s) => s.completeOnboarding);
  const navigate = useNavigate();

  const start = () => {
    completeOnboarding(name);
    setStage('phone');
  };

  const finish = () => navigate('/');

  if (stage === 'phone') {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-10">
        <div className="text-center">
          <div className="text-6xl">📱</div>
          <h1 className="mt-3 text-2xl font-black">{t.signInTitle}</h1>
          <p className="mt-2 text-ink/70">{t.signInBody}</p>
        </div>
        <AuthPanel />
        <button className="btn-ghost w-full" onClick={finish}>
          {t.continueArrow}
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-10">
      <div className="text-center">
        <div className="text-7xl">👋</div>
        <h1 className="mt-3 text-4xl font-black text-brand-700">{t.appName}</h1>
        <p className="mt-2 text-xl font-bold">{t.welcome}</p>
        <p className="mt-2 text-ink/70">{t.welcomeBody}</p>
      </div>

      <div className="card">
        <label className="mb-2 block font-black" htmlFor="name">
          {t.nameLabel}
        </label>
        <input
          id="name"
          className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-lg font-bold outline-none focus:border-brand-400"
          placeholder={t.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={24}
        />
      </div>

      <div className="card">
        <p className="mb-3 font-black">{t.knowLevelQuestion}</p>
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

      <button className="btn-primary w-full text-xl" onClick={start} disabled={!knowLevel}>
        {t.start}
      </button>
    </div>
  );
}
