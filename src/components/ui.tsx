import type { ReactNode } from 'react';

export function StatChip({ icon, value, label }: { icon: string; value: ReactNode; label?: string }) {
  return (
    <div className="card flex items-center gap-3 !p-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="text-lg font-black leading-tight">{value}</div>
        {label && <div className="text-xs font-bold text-ink/50">{label}</div>}
      </div>
    </div>
  );
}

export function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = max > 0 ? Math.min(100, (value / max) * 100) : 0;
  return (
    <div className="h-3 overflow-hidden rounded-full bg-brand-100">
      <div className="h-full rounded-full bg-brand-500 transition-all duration-500" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Screen({ children }: { children: ReactNode }) {
  return <div className="safe-top mx-auto w-full max-w-xl px-4 pb-28 pt-6 md:max-w-2xl">{children}</div>;
}

export function Stars({ n, size = 'text-2xl' }: { n: number; size?: string }) {
  return (
    <span dir="ltr" className={size} aria-label={`${n}/3 stars`}>
      {[1, 2, 3].map((i) => (
        <span key={i} className={i <= n ? '' : 'opacity-25 grayscale'}>
          ⭐
        </span>
      ))}
    </span>
  );
}
