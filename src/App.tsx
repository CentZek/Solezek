import { useEffect, useState } from 'react';
import { HashRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { t } from './i18n/ckb';
import { getSupabase, supabaseConfigured } from './lib/supabase';
import { useProgress } from './state/progress';
import { Onboarding } from './screens/Onboarding';
import { AuthScreen, AUTH_UPDATED_EVENT } from './screens/AuthScreen';
import { Home } from './screens/Home';
import { CourseMap } from './screens/CourseMap';
import { Lesson } from './screens/Lesson';
import { Review } from './screens/Review';
import { DailyChallenge } from './screens/DailyChallenge';
import { Achievements } from './screens/Achievements';
import { Profile } from './screens/Profile';

const tabs = [
  { to: '/', icon: '🏠', label: t.nav.home },
  { to: '/map', icon: '📚', label: t.nav.learn },
  { to: '/review', icon: '🔄', label: t.nav.review },
  { to: '/achievements', icon: '🏆', label: t.nav.achievements },
  { to: '/profile', icon: '👤', label: t.nav.profile },
];

function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 border-t-2 border-brand-100 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur">
      <div className="mx-auto flex max-w-xl">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.to === '/'}
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center gap-0.5 py-2 text-xs font-bold transition ${
                isActive ? 'text-brand-600' : 'text-ink/40'
              }`
            }
          >
            <span className="text-2xl">{tab.icon}</span>
            {tab.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default function App() {
  const onboarded = useProgress((s) => s.onboarded);
  // undefined = still checking, null = signed out, string = user id
  const [sessionUser, setSessionUser] = useState<string | null | undefined>(supabaseConfigured ? undefined : null);
  // While a password reset is pending, keep the auth gate up even though the
  // recovery OTP already created a session.
  const [mustSetPassword, setMustSetPassword] = useState(
    () => sessionStorage.getItem('bahdini-must-set-pw') === '1',
  );

  useEffect(() => {
    const onAuthUpdated = () => setMustSetPassword(sessionStorage.getItem('bahdini-must-set-pw') === '1');
    window.addEventListener(AUTH_UPDATED_EVENT, onAuthUpdated);
    return () => window.removeEventListener(AUTH_UPDATED_EVENT, onAuthUpdated);
  }, []);

  useEffect(() => {
    if (!supabaseConfigured) return;
    let sub: { unsubscribe: () => void } | null = null;
    void getSupabase().then((sb) => {
      if (!sb) {
        setSessionUser(null);
        return;
      }
      sb.auth.getSession().then(({ data }) => setSessionUser(data.session?.user.id ?? null));
      const { data } = sb.auth.onAuthStateChange((_e, session) => setSessionUser(session?.user.id ?? null));
      sub = data.subscription;
    });
    return () => sub?.unsubscribe();
  }, []);

  // While checking for an existing session, render nothing (avoid a flash).
  if (sessionUser === undefined) {
    return <div className="flex min-h-screen items-center justify-center text-4xl">👋</div>;
  }

  // Supabase is configured: an account is required before using the app.
  if (supabaseConfigured && (!sessionUser || mustSetPassword)) {
    return <AuthScreen />;
  }

  return (
    <HashRouter>
      {!onboarded ? (
        <Onboarding />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<CourseMap />} />
            <Route path="/lesson/:id" element={<Lesson />} />
            <Route path="/review" element={<Review />} />
            <Route path="/challenge" element={<DailyChallenge />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <BottomNav />
        </>
      )}
    </HashRouter>
  );
}
