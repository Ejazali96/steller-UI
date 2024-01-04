// www-redirect.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WwwRedirectGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (window.location.hostname.startsWith('www.')) {
      const newUrl = window.location.protocol + '//' + window.location.hostname.slice(4) + window.location.pathname;
      this.router.navigateByUrl(newUrl);
      return false;
    }
    return true;
  }
}
