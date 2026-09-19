import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from '../i18n/ckb';
import { getSupabase } from '../lib/supabase';
import { useProgress } from '../state/progress';

export function Onboarding() {
  const [name, setName] = useState('');
  const [nameFromAccount, setNameFromAccount] = useState(false);
  const [knowLevel, setKnowLevel] = useState<string | null>(null);
  const completeOnboarding = useProgress((s) => s.completeOnboarding);
  const navigate = useNavigate();

  // If the user signed up with a username, reuse it instead of asking again.
  useEffect(() => {
    void getSupabase().then(async (sb) => {
      if (!sb) return;
      const { data } = await sb.auth.getUser();
      const accountName = (data.user?.user_metadata?.name as string | undefined)?.trim();
      if (accountName) {
        setName(accountName);
        setNameFromAccount(true);
      }
    });
  }, []);

  const start = () => {
    completeOnboarding(name);
    navigate('/');
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-10">
      <div className="text-center">
        <div className="text-7xl">👋</div>
        <h1 className="mt-3 text-4xl font-black text-brand-700">{t.appName}</h1>
        <p className="mt-2 text-xl font-bold">{t.welcome}</p>
        <p className="mt-2 text-ink/70">{t.welcomeBody}</p>
      </div>

      {!nameFromAccount && (
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
      )}

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
