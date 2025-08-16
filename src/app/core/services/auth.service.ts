import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[]; // e.g. ['Admin'] or ['Member']
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
  get user(): User | null {
    return this._user$.getValue();
  }
  get isLoggedIn(): boolean {
    return !!this.user;
  }
  isAdmin(): boolean {
    return this.hasRole('Admin');
  }
  hasRole(role: string): boolean {
    return !!this.user?.roles.includes(role);
  }
  hasAnyRole(required: string[]): boolean {
    return required.some(r => this.hasRole(r));
  }

  // ===== Registration / Login (mocked) =====
  emailExists(email: string): boolean {
    const users = loadUsers();
    return users.some(u => u.email.toLowerCase() === email.toLowerCase());
  }

  register(opts: { name: string; email: string; password: string; role?: 'Admin' | 'Member' }): { ok: boolean; error?: string } {
    const { name, email, password } = opts;
    const role = opts.role ?? 'Member';

    if (!name?.trim() || !email?.trim() || !password?.trim()) {
      return { ok: false, error: 'All fields are required.' };
    }
    if (this.emailExists(email)) {
      return { ok: false, error: 'An account with that email already exists.' };
    }

    const users = loadUsers();
    const created: PrivateUser = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      roles: [role],
      password, // ⚠️ plain text in mock DB; replace with hashing when adding a real backend
      token: undefined,
    };
    users.push(created);
    saveUsers(users);

    // Auto-login after sign-up
    const sessionUser: User = {
      id: created.id,
      name: created.name,
      email: created.email,
      roles: created.roles,
      token: 'mock.' + btoa(created.email),
    };
    saveSessionUser(sessionUser);
    this._user$.next(sessionUser);
    return { ok: true };
  }

  login(email: string, password: string, role: 'Admin' | 'Member' = 'Member'): boolean {
    // Try real user in the mock DB first
    const users = loadUsers();
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      if (existing.password !== password) return false;
      const sessionUser: User = {
        id: existing.id,
        name: existing.name,
        email: existing.email,
        roles: existing.roles,
        token: 'mock.' + btoa(existing.email),
      };
      saveSessionUser(sessionUser);
      this._user$.next(sessionUser);
      return true;
    }

    // Fallback quick login
    if (!email || !password) return false;
    const mock: User = {
      id: crypto.randomUUID(),
      name: email.split('@')[0],
      email,
      roles: [role],
      token: 'mock.' + btoa(email),
    };
    saveSessionUser(mock);
    this._user$.next(mock);
    return true;
  }

  loginAsAdmin() { return this.login('admin@apwu.local', 'admin', 'Admin'); }
  loginAsMember() { return this.login('member@apwu.local', 'member', 'Member'); }

  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
    this._user$.next(null);
  }

  // ===== Admin-use helpers =====
  listUsers(): User[] {
    // Drop password field; return public view of users
    const priv = loadUsers();
    return priv.map(({ password, ...pub }) => pub);
  }
}

// ===== LocalStorage helpers =====
function loadSessionUser(): User | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch { return null; }
}
function saveSessionUser(u: User) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
}

function loadUsers(): PrivateUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    const list = raw ? (JSON.parse(raw) as PrivateUser[]) : [];
    // seed two users if empty
    if (!list.length) {
      const seedAdmin: PrivateUser = {
        id: crypto.randomUUID(),
        name: 'Admin',
        email: 'admin@apwu.local',
        password: 'admin',
        roles: ['Admin'],
      };
      const seedMember: PrivateUser = {
        id: crypto.randomUUID(),
        name: 'Member',
        email: 'member@apwu.local',
        password: 'member',
        roles: ['Member'],
      };
      const seeded = [seedAdmin, seedMember];
      saveUsers(seeded);
      return seeded;
    }
    return list;
  } catch { return []; }
}
function saveUsers(list: PrivateUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(list));
}
