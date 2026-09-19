import { useEffect, useRef, useState } from 'react';
import type { SupabaseClient } from '@supabase/supabase-js';
import { getSupabase } from '../lib/supabase';
import { t } from '../i18n/ckb';

type Stage =
  | { view: 'main'; tab: 'signin' | 'signup' }
  | { view: 'verify'; context: 'signup' | 'recovery' }
  | { view: 'forgot' }
  | { view: 'new-password' };

const RESEND_SECONDS = 45;

// Full-screen auth gate: sign up (username + phone + password + WhatsApp OTP),
// sign in (phone + password), and forgot-password (OTP → new password).
export function AuthScreen() {
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
  const [stage, setStage] = useState<Stage>({ view: 'main', tab: 'signup' });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [resendLeft, setResendLeft] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    void getSupabase().then((sb) => setSupabase(sb));
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startResendCountdown = () => {
    setResendLeft(RESEND_SECONDS);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setResendLeft((s) => {
        if (s <= 1 && timerRef.current) clearInterval(timerRef.current);
        return Math.max(0, s - 1);
      });
    }, 1000);
  };

  const run = async (fn: () => Promise<string | null>) => {
    setError('');
    setInfo('');
    setBusy(true);
    try {
      const err = await fn();
      if (err) setError(err);
    } finally {
      setBusy(false);
    }
  };

  const normalizedPhone = () => phone.trim().replace(/\s+/g, '');

  // --- Sign up: create account with password, then confirm via WhatsApp OTP ---
  const signUp = () =>
    run(async () => {
      const { error } = await supabase!.auth.signUp({
        phone: normalizedPhone(),
        password,
        options: { data: { name: name.trim() } },
      });
      if (error) return error.message;
      setStage({ view: 'verify', context: 'signup' });
      startResendCountdown();
      return null;
    });

  // --- Sign in with phone + password ---
  const signIn = () =>
    run(async () => {
      const { error } = await supabase!.auth.signInWithPassword({
        phone: normalizedPhone(),
        password,
      });
      return error ? error.message : null;
    });

  // --- Verify the OTP (after sign-up or recovery) ---
  const verify = () =>
    run(async () => {
      const ctx = stage.view === 'verify' ? stage.context : 'signup';
      const { error } = await supabase!.auth.verifyOtp({
        phone: normalizedPhone(),
        token: code.trim(),
        type: ctx === 'signup' ? 'signup' : 'sms',
      });
      if (error) return error.message;
      if (ctx === 'signup') {
        await supabase!.auth.updateUser({ data: { name: name.trim() } });
      } else {
        setPassword('');
        setStage({ view: 'new-password' });
      }
      return null;
    });

  // --- Resend the OTP ---
  const resend = () =>
    run(async () => {
      if (resendLeft > 0) return null;
      const ctx = stage.view === 'verify' ? stage.context : 'signup';
      const { error } =
        ctx === 'signup'
          ? await supabase!.auth.resend({ type: 'sms', phone: normalizedPhone() })
          : await supabase!.auth.signInWithOtp({ phone: normalizedPhone(), options: { shouldCreateUser: false } });
      if (error) return error.message;
      setInfo(t.codeSentTo(normalizedPhone()));
      startResendCountdown();
      return null;
    });

  // --- Forgot password: send OTP to prove phone ownership ---
  const sendRecovery = () =>
    run(async () => {
      const { error } = await supabase!.auth.signInWithOtp({
        phone: normalizedPhone(),
        options: { shouldCreateUser: false },
      });
      if (error) return error.message;
      setCode('');
      setStage({ view: 'verify', context: 'recovery' });
      startResendCountdown();
      return null;
    });

  // --- Set a new password after recovery OTP ---
  const setNewPassword = () =>
    run(async () => {
      const { error } = await supabase!.auth.updateUser({ password });
      if (error) return error.message;
      setInfo(t.passwordResetDone);
      return null;
    });

  const inputCls =
    'w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-lg font-bold outline-none focus:border-brand-400';

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 px-6 py-10">
      <div className="text-center">
        <div className="text-7xl">👋</div>
        <h1 className="mt-3 text-4xl font-black text-brand-700">{t.appName}</h1>
        <p className="mt-2 text-lg font-bold">{t.authWelcome}</p>
        <p className="mt-1 text-sm text-ink/60">{t.authSubtitle}</p>
      </div>

      {stage.view === 'main' && (
        <div className="card flex flex-col gap-3">
          <div className="mb-1 flex gap-2">
            <button
              className={`btn-ghost flex-1 !text-base ${stage.tab === 'signup' ? 'border-brand-400 bg-brand-50' : ''}`}
              onClick={() => setStage({ view: 'main', tab: 'signup' })}
            >
              {t.tabSignUp}
            </button>
            <button
              className={`btn-ghost flex-1 !text-base ${stage.tab === 'signin' ? 'border-brand-400 bg-brand-50' : ''}`}
              onClick={() => setStage({ view: 'main', tab: 'signin' })}
            >
              {t.tabSignIn}
            </button>
          </div>

          {stage.tab === 'signup' && (
            <input className={inputCls} placeholder={t.usernamePlaceholder} value={name} onChange={(e) => setName(e.target.value)} maxLength={24} />
          )}
          <input
            dir="ltr"
            type="tel"
            inputMode="tel"
            className={inputCls}
            placeholder={t.phonePlaceholder}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            dir="ltr"
            type="password"
            className={inputCls}
            placeholder={t.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {stage.tab === 'signup' ? (
            <button
              className="btn-primary"
              onClick={signUp}
              disabled={busy || !supabase || name.trim().length < 2 || normalizedPhone().length < 8 || password.length < 6}
            >
              {busy ? t.loading : t.signUpButton}
            </button>
          ) : (
            <>
              <button
                className="btn-primary"
                onClick={signIn}
                disabled={busy || !supabase || normalizedPhone().length < 8 || password.length < 6}
              >
                {busy ? t.loading : t.signInButton}
              </button>
              <button
                className="text-sm font-bold text-accent-dark underline decoration-dotted"
                onClick={() => {
                  setStage({ view: 'forgot' });
                  setError('');
                }}
              >
                {t.forgotPassword}
              </button>
            </>
          )}
        </div>
      )}

      {stage.view === 'verify' && (
        <div className="card flex flex-col gap-3">
          <p className="text-center font-black">{t.codeSentTo(normalizedPhone())}</p>
          <input
            dir="ltr"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            className={`${inputCls} text-center font-display text-2xl font-black tracking-[0.5em]`}
            placeholder="––––––"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="btn-primary" onClick={verify} disabled={busy || code.trim().length !== 6}>
            {busy ? t.loading : t.verifyCode}
          </button>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-ink/60">{t.codeNotReceived}</span>
            <button
              className={`font-bold ${resendLeft > 0 ? 'text-ink/40' : 'text-accent-dark underline decoration-dotted'}`}
              onClick={resend}
              disabled={busy || resendLeft > 0}
            >
              {resendLeft > 0 ? t.resendIn(resendLeft) : t.resendCode}
            </button>
          </div>
          <button
            className="btn-ghost"
            onClick={() => setStage(stage.context === 'signup' ? { view: 'main', tab: 'signup' } : { view: 'forgot' })}
          >
            {t.changeNumber}
          </button>
        </div>
      )}

      {stage.view === 'forgot' && (
        <div className="card flex flex-col gap-3">
          <p className="font-black">🔑 {t.forgotPassword}</p>
          <p className="text-sm text-ink/60">{t.forgotBody}</p>
          <input
            dir="ltr"
            type="tel"
            inputMode="tel"
            className={inputCls}
            placeholder={t.phonePlaceholder}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="btn-primary" onClick={sendRecovery} disabled={busy || !supabase || normalizedPhone().length < 8}>
            {busy ? t.loading : t.sendCode}
          </button>
          <button className="btn-ghost" onClick={() => setStage({ view: 'main', tab: 'signin' })}>
            {t.tabSignIn}
          </button>
        </div>
      )}

      {stage.view === 'new-password' && (
        <div className="card flex flex-col gap-3">
          <p className="font-black">🔑 {t.newPasswordLabel}</p>
          <input
            dir="ltr"
            type="password"
            className={inputCls}
            placeholder={t.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-primary" onClick={setNewPassword} disabled={busy || password.length < 6}>
            {busy ? t.loading : t.resetPasswordButton}
          </button>
        </div>
      )}

      {error && <p className="rounded-2xl bg-red-50 p-3 text-center text-sm font-bold text-red-600">{error}</p>}
      {info && <p className="rounded-2xl bg-brand-50 p-3 text-center text-sm font-bold text-brand-700">{info}</p>}
    </div>
  );
}
