import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const required: string[] = route.data?.['roles'] ?? [];
    if (!required.length) return true;
    if (this.auth.isLoggedIn && this.auth.hasAnyRole(required)) return true;
    return this.router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: route.url.map(s => s.path).join('/') } });
  }
}
