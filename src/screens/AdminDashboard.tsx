import { useEffect, useState } from 'react';
import { getSupabase } from '../lib/supabase';
import { levels } from '../content/levels';

const SESSION_KEY = 'solezek-admin-session';

type AdminUser = {
  id: string;
  username: string;
  phone: string;
  createdAt: string;
  lastActive: string | null;
  xp: number;
  coins: number;
  streak: number;
  totalCorrect: number;
  totalAnswers: number;
  levelsCompleted: number;
  stars: number;
  words: number;
  achievements: number;
};

type Invite = {
  code: string;
  used_count: number;
  max_uses: number;
  used_at: string | null;
  created_at: string;
};

type Overview = { users: AdminUser[]; invites: Invite[] };

async function errorMessage(error: unknown): Promise<string> {
  const response = (error as { context?: Response })?.context;
  if (response) {
    try {
      const body = await response.json() as { error?: string };
      if (body.error) return body.error;
    } catch {
      // Fall back to the client error below.
    }
  }
  return error instanceof Error ? error.message : 'Admin request failed.';
}

export function AdminDashboard() {
  const [token, setToken] = useState(() => sessionStorage.getItem(SESSION_KEY) ?? '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [invites, setInvites] = useState<Invite[]>([]);
  const [search, setSearch] = useState('');
  const [newCode, setNewCode] = useState('');
  const [createdCode, setCreatedCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');

  const request = async <T,>(action: string, payload: Record<string, unknown> = {}, sessionToken = token): Promise<T> => {
    const supabase = await getSupabase();
    if (!supabase) throw new Error('Supabase is not configured.');
    const { data, error } = await supabase.functions.invoke('admin-dashboard', {
      body: { action, ...payload },
      headers: sessionToken ? { 'X-Admin-Token': sessionToken } : undefined,
    });
    if (error) throw new Error(await errorMessage(error));
    return data as T;
  };

  const refresh = async (sessionToken = token) => {
    setBusy(true);
    setError('');
    try {
      const data = await request<Overview>('overview', {}, sessionToken);
      setUsers(data.users);
      setInvites(data.invites);
    } catch (err) {
      const message = await errorMessage(err);
      setError(message);
      if (message.includes('session has expired')) logout();
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    if (token) void refresh(token);
  }, []);

  const login = async () => {
    setBusy(true);
    setError('');
    try {
      const data = await request<{ token: string }>('login', { username, password }, '');
      sessionStorage.setItem(SESSION_KEY, data.token);
      setToken(data.token);
      setPassword('');
      await refresh(data.token);
    } catch (err) {
      setError(await errorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setToken('');
    setUsers([]);
    setInvites([]);
  };

  const createInvite = async () => {
    setCreating(true);
    setError('');
    setInfo('');
    setCreatedCode('');
    try {
      const data = await request<{ invite: Invite }>('create-invite', { code: newCode });
      setCreatedCode(data.invite.code);
      setNewCode('');
      const overview = await request<Overview>('overview');
      setUsers(overview.users);
      setInvites(overview.invites);
    } catch (err) {
      setError(await errorMessage(err));
    } finally {
      setCreating(false);
    }
  };

  const copyCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setInfo(`Copied ${code}`);
  };

  const filteredUsers = users.filter((user) =>
    `${user.username} ${user.phone}`.toLowerCase().includes(search.trim().toLowerCase()),
  );
  const availableInvites = invites.filter((invite) => invite.used_count < invite.max_uses).length;

  if (!token) {
    return (
      <div dir="ltr" className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-10">
        <form
          className="card flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            void login();
          }}
        >
          <div>
            <h1 className="text-3xl font-black text-brand-700">Solezek Admin</h1>
            <p className="mt-1 text-sm font-bold text-ink/60">User progress and invite management</p>
          </div>
          <input
            className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-lg font-bold outline-none focus:border-brand-400"
            placeholder="Admin username"
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            className="w-full rounded-2xl border-2 border-gray-200 px-4 py-3 text-lg font-bold outline-none focus:border-brand-400"
            placeholder="Admin password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="btn-primary" disabled={busy || !username || !password}>
            {busy ? 'Signing in…' : 'Sign in'}
          </button>
          {error && <p className="rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-600">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div dir="ltr" className="mx-auto min-h-screen w-full max-w-7xl px-4 py-6 sm:px-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-black text-brand-700">Solezek Admin</h1>
          <p className="text-sm font-bold text-ink/60">Users, learning progress, and invitations</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-ghost !px-4" onClick={() => void refresh()} disabled={busy}>Refresh</button>
          <button className="btn-ghost !px-4" onClick={logout}>Sign out</button>
        </div>
      </header>

      {error && <p className="mt-4 rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-600">{error}</p>}
      {info && <p className="mt-4 rounded-2xl bg-brand-50 p-3 text-sm font-bold text-brand-700">{info}</p>}

      <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="card"><p className="text-sm font-bold text-ink/50">Total users</p><p className="mt-1 text-3xl font-black">{users.length}</p></div>
        <div className="card"><p className="text-sm font-bold text-ink/50">Available invites</p><p className="mt-1 text-3xl font-black">{availableInvites}</p></div>
        <div className="card"><p className="text-sm font-bold text-ink/50">Completed levels</p><p className="mt-1 text-3xl font-black">{users.reduce((sum, user) => sum + user.levelsCompleted, 0)}</p></div>
        <div className="card"><p className="text-sm font-bold text-ink/50">Total XP</p><p className="mt-1 text-3xl font-black">{users.reduce((sum, user) => sum + user.xp, 0)}</p></div>
      </section>

      <section className="card mt-6">
        <h2 className="text-xl font-black">Create an invite code</h2>
        <p className="mt-1 text-sm text-ink/60">Leave the field empty to generate a random single-use code, or enter a custom code in XXXX-XXXX format.</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            dir="ltr"
            className="min-w-0 flex-1 rounded-2xl border-2 border-gray-200 px-4 py-3 font-display text-lg font-bold uppercase tracking-[0.15em] outline-none focus:border-brand-400"
            placeholder="XXXX-XXXX"
            maxLength={9}
            value={newCode}
            onChange={(event) => setNewCode(event.target.value.toUpperCase())}
          />
          <button className="btn-primary" onClick={() => void createInvite()} disabled={creating}>
            {creating ? 'Creating…' : 'Create invite'}
          </button>
        </div>
        {createdCode && (
          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl bg-brand-50 p-4">
            <span className="font-display text-2xl font-black tracking-[0.15em]">{createdCode}</span>
            <button className="btn-ghost !min-h-[40px] !px-4 !py-1 !text-sm" onClick={() => void copyCode(createdCode)}>Copy</button>
          </div>
        )}
      </section>

      <section className="card mt-6">
        <h2 className="text-xl font-black">Invite codes</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead><tr className="border-b-2 border-brand-100 text-ink/50"><th className="py-3 pr-4">Code</th><th className="py-3 pr-4">Status</th><th className="py-3 pr-4">Created</th><th className="py-3">Action</th></tr></thead>
            <tbody>
              {invites.map((invite) => {
                const available = invite.used_count < invite.max_uses;
                return (
                  <tr key={invite.code} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-display font-black tracking-wider">{invite.code}</td>
                    <td className={`py-3 pr-4 font-bold ${available ? 'text-brand-600' : 'text-ink/40'}`}>{available ? 'Available' : 'Used'}</td>
                    <td className="py-3 pr-4">{new Date(invite.created_at).toLocaleDateString()}</td>
                    <td className="py-3">{available && <button className="font-bold text-accent-dark underline" onClick={() => void copyCode(invite.code)}>Copy</button>}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {!invites.length && <p className="py-6 text-center text-ink/50">No invite codes yet.</p>}
        </div>
      </section>

      <section className="card mt-6 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-black">Users and progress</h2>
          <input
            type="search"
            className="rounded-2xl border-2 border-gray-200 px-4 py-2 font-bold outline-none focus:border-brand-400"
            placeholder="Search name or phone"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <p className="mt-2 text-xs font-bold text-ink/50">Passwords are securely hashed by Supabase and cannot be viewed.</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[1000px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-brand-100 text-ink/50">
                <th className="py-3 pr-4">Username</th><th className="py-3 pr-4">Phone</th><th className="py-3 pr-4">Joined</th><th className="py-3 pr-4">XP</th><th className="py-3 pr-4">Levels</th><th className="py-3 pr-4">Stars</th><th className="py-3 pr-4">Words</th><th className="py-3 pr-4">Accuracy</th><th className="py-3 pr-4">Streak</th><th className="py-3">Last active</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-black">{user.username || 'No name'}</td>
                  <td dir="ltr" className="py-3 pr-4">{user.phone}</td>
                  <td className="py-3 pr-4">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="py-3 pr-4 font-bold">{user.xp}</td>
                  <td className="py-3 pr-4">{user.levelsCompleted} / {levels.length}</td>
                  <td className="py-3 pr-4">{user.stars}</td>
                  <td className="py-3 pr-4">{user.words}</td>
                  <td className="py-3 pr-4">{user.totalAnswers ? Math.round((user.totalCorrect / user.totalAnswers) * 100) : 0}%</td>
                  <td className="py-3 pr-4">{user.streak}</td>
                  <td className="py-3">{user.lastActive || 'Never'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!filteredUsers.length && <p className="py-6 text-center text-ink/50">{busy ? 'Loading users…' : 'No users found.'}</p>}
        </div>
      </section>
    </div>
  );
}
