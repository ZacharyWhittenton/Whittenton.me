import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[]; // e.g. ['Admin'] or ['Member']
  // Profile fields
  dob?: string | null;   // ISO date string: 'YYYY-MM-DD'
  phone?: string | null;
  token?: string;
}

type PrivateUser = User & { password: string };

const STORAGE_KEY = 'apwu_auth_user_v1';  // current session
const USERS_KEY   = 'apwu_auth_users_v1'; // “database” of users

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user$ = new BehaviorSubject<User | null>(loadSessionUser());
  user$ = this._user$.asObservable();

  // ===== Session helpers =====
  get user(): User | null { return this._user$.getValue(); }
  get isLoggedIn(): boolean { return !!this.user; }
  isAdmin(): boolean { return this.hasRole('Admin'); }
  hasRole(role: string): boolean { return !!this.user?.roles.includes(role); }
  hasAnyRole(required: string[]): boolean { return required.some(r => this.hasRole(r)); }

  // ===== Registration / Login (mocked) =====
  emailExists(email: string, excludeUserId?: string): boolean {
    const users = loadUsers();
    const lower = email.toLowerCase();
    return users.some(u => u.email.toLowerCase() === lower && u.id !== excludeUserId);
  }

  register(opts: { name: string; email: string; password: string; role?: 'Admin' | 'Member' }): { ok: boolean; error?: string } {
    const { name, email, password } = opts;
    const role = opts.role ?? 'Member';

    if (!name?.trim() || !email?.trim() || !password?.trim()) return { ok: false, error: 'All fields are required.' };
    if (this.emailExists(email)) return { ok: false, error: 'An account with that email already exists.' };

    const users = loadUsers();
    const created: PrivateUser = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      roles: [role],
      password,
      dob: null,
      phone: null,
      token: undefined,
    };
    users.push(created);
    saveUsers(users);

    // Auto-login
    const sessionUser: User = toPublic(created);
    sessionUser.token = 'mock.' + btoa(sessionUser.email);
    saveSessionUser(sessionUser);
    this._user$.next(sessionUser);
    return { ok: true };
  }

  login(email: string, password: string, role: 'Admin' | 'Member' = 'Member'): boolean {
    const users = loadUsers();
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      if (existing.password !== password) return false;
      const sessionUser: User = toPublic(existing);
      sessionUser.token = 'mock.' + btoa(sessionUser.email);
      saveSessionUser(sessionUser);
      this._user$.next(sessionUser);
      return true;
    }

    // Fallback quick login
    if (!email || !password) return false;
    const mock: PrivateUser = {
      id: crypto.randomUUID(),
      name: email.split('@')[0],
      email,
      roles: [role],
      password,
      dob: null,
      phone: null,
      token: undefined,
    };
    // Save to "db" so profile can be edited later
    users.push(mock);
    saveUsers(users);

    const sessionUser: User = toPublic(mock);
    sessionUser.token = 'mock.' + btoa(sessionUser.email);
    saveSessionUser(sessionUser);
    this._user$.next(sessionUser);
    return true;
  }

  loginAsAdmin() { return this.login('admin@apwu.local', 'admin', 'Admin'); }
  loginAsMember() { return this.login('member@apwu.local', 'member', 'Member'); }

  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
    this._user$.next(null);
  }

  // ===== Profile update =====
  updateProfile(patch: { name: string; email: string; dob?: string | null; phone?: string | null }): { ok: boolean; error?: string } {
    const current = this.user;
    if (!current) return { ok: false, error: 'Not authenticated.' };

    const users = loadUsers();
    const idx = users.findIndex(u => u.id === current.id);
    if (idx < 0) return { ok: false, error: 'User not found.' };

    const email = patch.email.trim().toLowerCase();
    if (this.emailExists(email, current.id)) return { ok: false, error: 'Email already in use by another account.' };

    // Update DB
    const existing = users[idx];
    users[idx] = {
      ...existing,
      name: patch.name.trim(),
      email,
      dob: patch.dob ?? null,
      phone: patch.phone ?? null,
    };
    saveUsers(users);

    // Update session
    const updatedSession: User = toPublic(users[idx]);
    updatedSession.token = 'mock.' + btoa(updatedSession.email);
    saveSessionUser(updatedSession);
    this._user$.next(updatedSession);

    return { ok: true };
  }

  // ===== Admin-use helpers =====
  listUsers(): User[] {
    const priv = loadUsers();
    return priv.map(toPublic);
  }
}

// ===== Helpers =====
function toPublic(u: PrivateUser): User {
  const { password, ...pub } = u;
  return pub;
}

function loadSessionUser(): User | null {
  try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? (JSON.parse(raw) as User) : null; }
  catch { return null; }
}
function saveSessionUser(u: User) { localStorage.setItem(STORAGE_KEY, JSON.stringify(u)); }

function loadUsers(): PrivateUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    const list = raw ? (JSON.parse(raw) as PrivateUser[]) : [];
    if (!list.length) {
      const seedAdmin: PrivateUser = {
        id: crypto.randomUUID(), name: 'Admin', email: 'admin@apwu.local', password: 'admin', roles: ['Admin'],
        dob: '1990-01-01', phone: '555-0100', token: undefined,
      };
      const seedMember: PrivateUser = {
        id: crypto.randomUUID(), name: 'Member', email: 'member@apwu.local', password: 'member', roles: ['Member'],
        dob: '1992-02-02', phone: '555-0200', token: undefined,
      };
      const seeded = [seedAdmin, seedMember];
      saveUsers(seeded);
      return seeded;
    }
    return list;
  } catch { return []; }
}
function saveUsers(list: PrivateUser[]) { localStorage.setItem(USERS_KEY, JSON.stringify(list)); }
