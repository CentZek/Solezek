import { useState } from 'react';
import { t } from '../i18n/ckb';
import { getSupabase } from '../lib/supabase';

type Mode = 'welcome' | 'signup' | 'otp' | 'login';

export function AuthGate() {
  const [mode, setMode] = useState<Mode>('welcome');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const clearError = () => setError('');

  // ── Sign Up ──
  const handleSignup = async () => {
    clearError();
    setBusy(true);
    const supabase = await getSupabase();
    if (!supabase) return;
    const { error: err } = await supabase.auth.signUp({
      phone: phone.trim(),
      password,
      options: { data: { username: username.trim() } },
    });
    setBusy(false);
    if (err) {
      setError(err.message);
      return;
    }
    setMode('otp');
  };

  // ── Verify OTP ──
  const handleVerify = async () => {
    clearError();
    setBusy(true);
    const supabase = await getSupabase();
    if (!supabase) return;
    const { error: err } = await supabase.auth.verifyOtp({
      phone: phone.trim(),
      token: otpCode.trim(),
      type: 'sms',
    });
    setBusy(false);
    if (err) {
      setError(err.message);
      return;
    }
  };

  // ── Log In ──
  const handleLogin = async () => {
    clearError();
    setBusy(true);
    const supabase = await getSupabase();
    if (!supabase) return;
    const { error: err } = await supabase.auth.signInWithPassword({
      phone: phone.trim(),
      password,
    });
    setBusy(false);
    if (err) {
      setError(err.message);
      return;
    }
  };

  // ── Welcome Screen ──
  if (mode === 'welcome') {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-10">
        <div className="text-center">
          <div className="text-7xl">👋</div>
          <h1 className="mt-3 text-4xl font-black text-brand-700">{t.appName}</h1>
          <p className="mt-2 text-xl font-bold">{t.welcome}</p>
          <p className="mt-2 text-ink/70">{t.welcomeBody}</p>
        </div>
        <button className="btn-primary w-full text-xl" onClick={() => { clearError(); setMode('signup'); }}>
          {t.auth.createAccount}
        </button>
        <button className="btn-ghost w-full text-lg" onClick={() => { clearError(); setMode('login'); }}>
          {t.auth.haveAccount}
        </button>
      </div>
    );
  }

  // ── Sign Up Screen ──
  if (mode === 'signup') {
    const canSubmit = username.trim().length >= 2 && phone.trim().length >= 8 && password.length >= 8;
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-10">
        <button className="self-start font-bold text-brand-600" onClick={() => { clearError(); setMode('welcome'); }}>
          {t.back}
        </button>
        <div className="text-center">
          <div className="text-6xl">📝</div>
          <h1 className="mt-3 text-2xl font-black">{t.auth.createAccount}</h1>
        </div>
        <div className="card flex flex-col gap-3">
          <label className="font-black">{t.auth.usernameLabel}</label>
          <input
            className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-lg font-bold outline-none focus:border-brand-400"
            placeholder={t.auth.usernamePlaceholder}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            maxLength={24}
          />
          <label className="font-black">{t.auth.phoneLabel}</label>
          <input
            dir="ltr"
            type="tel"
            inputMode="tel"
            className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-lg font-bold outline-none focus:border-brand-400"
            placeholder={t.phonePlaceholder}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label className="font-black">{t.auth.passwordLabel}</label>
          <input
            dir="ltr"
            type="password"
            className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-lg font-bold outline-none focus:border-brand-400"
            placeholder={t.auth.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
          />
          {password.length > 0 && password.length < 8 && (
            <p className="text-sm font-bold text-amber-600">{t.auth.passwordTooShort}</p>
          )}
        </div>
        <button className="btn-primary w-full text-xl" onClick={handleSignup} disabled={busy || !canSubmit}>
          {busy ? t.loading : t.auth.signUp}
        </button>
        <button className="btn-ghost text-sm" onClick={() => { clearError(); setMode('login'); }}>
          {t.auth.haveAccount}
        </button>
        {error && <p className="text-sm font-bold text-red-600">{error}</p>}
      </div>
    );
  }

  // ── OTP Verification Screen ──
  if (mode === 'otp') {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-10">
        <div className="text-center">
          <div className="text-6xl">📱</div>
          <h1 className="mt-3 text-2xl font-black">{t.auth.verifyPhone}</h1>
          <p className="mt-2 text-ink/70">{t.codeSentTo(phone)}</p>
        </div>
        <input
          dir="ltr"
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-center font-display text-2xl font-black tracking-[0.5em] outline-none focus:border-brand-400"
          placeholder="------"
          maxLength={6}
          value={otpCode}
          onChange={(e) => setOtpCode(e.target.value)}
        />
        <button className="btn-primary w-full text-xl" onClick={handleVerify} disabled={busy || otpCode.trim().length !== 6}>
          {busy ? t.loading : t.verifyCode}
        </button>
        <button className="btn-ghost" onClick={() => { clearError(); setMode('signup'); }}>
          {t.changeNumber}
        </button>
        {error && <p className="text-sm font-bold text-red-600">{error}</p>}
      </div>
    );
  }

  // ── Login Screen ──
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-10">
      <button className="self-start font-bold text-brand-600" onClick={() => { clearError(); setMode('welcome'); }}>
        {t.back}
      </button>
      <div className="text-center">
        <div className="text-6xl">🔑</div>
        <h1 className="mt-3 text-2xl font-black">{t.auth.logIn}</h1>
      </div>
      <div className="card flex flex-col gap-3">
        <label className="font-black">{t.auth.phoneLabel}</label>
        <input
          dir="ltr"
          type="tel"
          inputMode="tel"
          className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-lg font-bold outline-none focus:border-brand-400"
          placeholder={t.phonePlaceholder}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label className="font-black">{t.auth.passwordLabel}</label>
        <input
          dir="ltr"
          type="password"
          className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-lg font-bold outline-none focus:border-brand-400"
          placeholder={t.auth.passwordPlaceholder}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn-primary w-full text-xl" onClick={handleLogin} disabled={busy || phone.trim().length < 8 || password.length < 6}>
        {busy ? t.loading : t.auth.logIn}
      </button>
      <button className="btn-ghost text-sm" onClick={() => { clearError(); setMode('signup'); }}>
        {t.auth.noAccount}
      </button>
      {error && <p className="text-sm font-bold text-red-600">{error}</p>}
    </div>
  );
}
