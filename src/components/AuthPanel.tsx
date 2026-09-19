import { useEffect, useState } from 'react';
import type { SupabaseClient, User } from '@supabase/supabase-js';
import { getSupabase, supabaseConfigured } from '../lib/supabase';
import { t } from '../i18n/ckb';

// Phone-number sign-in with a one-time code (passwordless).
// Works with Supabase's MessageBird (Bird.com) phone provider.
export function AuthPanel() {
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [stage, setStage] = useState<'phone' | 'code'>('phone');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    if (!supabaseConfigured) return;
    let sub: { unsubscribe: () => void } | null = null;
    void getSupabase().then((sb) => {
      if (!sb) return;
      setSupabase(sb);
      sb.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null));
      const { data } = sb.auth.onAuthStateChange((_e, session) => setUser(session?.user ?? null));
      sub = data.subscription;
    });
    return () => sub?.unsubscribe();
  }, []);

  if (!supabaseConfigured) return null;

  const sendCode = async () => {
    if (!supabase) return;
    setError('');
    setBusy(true);
    const { error } = await supabase.auth.signInWithOtp({ phone: phone.trim() });
    setBusy(false);
    if (error) setError(error.message);
    else setStage('code');
  };

  const verify = async () => {
    if (!supabase) return;
    setError('');
    setBusy(true);
    const { error } = await supabase.auth.verifyOtp({ phone: phone.trim(), token: code.trim(), type: 'sms' });
    setBusy(false);
    if (error) setError(error.message);
  };

  const signOut = async () => {
    await supabase?.auth.signOut();
    setStage('phone');
    setCode('');
  };

  const deleteAccount = async () => {
    if (!supabase) return;
    setBusy(true);
    // Edge function deletes the auth user; table cascades wipe all progress rows.
    await supabase.functions.invoke('delete-account');
    await supabase.auth.signOut();
    window.location.reload();
  };

  if (user) {
    return (
      <div className="card mt-2 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="font-black">📱 {user.phone}</p>
          <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-700">{t.signedIn}</span>
        </div>
        <p className="text-sm text-ink/60">{t.syncNote}</p>
        <button className="btn-ghost" onClick={signOut}>
          {t.signOut}
        </button>
        {!confirmDelete ? (
          <button className="btn bg-red-50 font-bold text-red-600" onClick={() => setConfirmDelete(true)}>
            🗑️ {t.deleteAccount}
          </button>
        ) : (
          <div className="flex flex-col gap-2 rounded-2xl border-2 border-red-200 p-3">
            <p className="text-sm font-bold text-red-600">{t.deleteAccountConfirm}</p>
            <div className="flex gap-2">
              <button className="btn flex-1 bg-red-500 text-white" onClick={deleteAccount} disabled={busy}>
                {t.deleteAccount}
              </button>
              <button className="btn-ghost flex-1" onClick={() => setConfirmDelete(false)}>
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="card mt-2 flex flex-col gap-3">
      <p className="font-black">📱 {t.signInTitle}</p>
      <p className="text-sm text-ink/60">{t.signInBody}</p>

      {stage === 'phone' ? (
        <>
          <input
            dir="ltr"
            type="tel"
            inputMode="tel"
            className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-lg font-bold outline-none focus:border-brand-400"
            placeholder={t.phonePlaceholder}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="btn-primary" onClick={sendCode} disabled={busy || !supabase || phone.trim().length < 8}>
            {busy ? t.loading : t.sendCode}
          </button>
        </>
      ) : (
        <>
          <p className="text-sm font-bold text-ink/70">{t.codeSentTo(phone)}</p>
          <input
            dir="ltr"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-center font-display text-2xl font-black tracking-[0.5em] outline-none focus:border-brand-400"
            placeholder="––––––"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="btn-primary" onClick={verify} disabled={busy || code.trim().length !== 6}>
            {busy ? t.loading : t.verifyCode}
          </button>
          <button className="btn-ghost" onClick={() => setStage('phone')}>
            {t.changeNumber}
          </button>
        </>
      )}
      {error && <p className="text-sm font-bold text-red-600">{error}</p>}
    </div>
  );
}
