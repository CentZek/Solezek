import { HashRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { t } from './i18n/ckb';
import { useProgress } from './state/progress';
import { Onboarding } from './screens/Onboarding';
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
