import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const allowed: string[] = route.data?.['roles'] ?? [];

    // Not signed in → send to login and keep where they were going
    if (!this.auth.isLoggedIn) {
      return this.router.createUrlTree(['/auth/login'], {
        queryParams: { redirect: state.url || '/scheduler' },
      });
    }

    // If no roles specified, any authenticated user is allowed
    if (!allowed.length) return true;

    // Allow only if user has any of the allowed roles
    if (this.auth.hasAnyRole(allowed)) return true;

    // Logged in but not permitted → send home (or a 403 route if you add one)
    return this.router.createUrlTree(['/']);
  }
}
