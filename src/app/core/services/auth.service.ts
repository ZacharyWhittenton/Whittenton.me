import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[]; // e.g. ['Admin'] or ['Member']
  token?: string;
}

const STORAGE_KEY = 'apwu_auth_user_v1';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user$ = new BehaviorSubject<User | null>(loadUser());
  user$ = this._user$.asObservable();

  get user(): User | null {
    return this._user$.getValue();
  }
  get isLoggedIn(): boolean {
    return !!this.user;
  }

  login(email: string, password: string, role: 'Admin' | 'Member' = 'Member'): boolean {
    if (!email || !password) return false;
    const mock: User = {
      id: crypto.randomUUID(),
      name: email.split('@')[0],
      email,
      roles: [role],
      token: 'mock.' + btoa(email),
    };
    saveUser(mock);
    this._user$.next(mock);
    return true;
  }

  loginAsAdmin() { return this.login('admin@apwu.local', 'admin', 'Admin'); }
  loginAsMember() { return this.login('member@apwu.local', 'member', 'Member'); }

  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
    this._user$.next(null);
  }

  hasRole(role: string): boolean {
    return !!this.user?.roles.includes(role);
  }
  hasAnyRole(required: string[]): boolean {
    return required.some(r => this.hasRole(r));
  }
  isAdmin(): boolean {
    return this.hasRole('Admin');
  }
}

function loadUser(): User | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}
function saveUser(u: User) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
}
