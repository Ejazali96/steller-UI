// www-redirect.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationStart, UrlTree } from '@angular/router';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class WwwRedirectGuard implements CanActivate {
  constructor(private router: Router,private location: Location) {
   
  }
  redirectionDone = false
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const currentUrl = window.location.href;

    if (currentUrl.startsWith('http://www.') || currentUrl.startsWith('https://www.')) {
      const newUrl = currentUrl.replace('www.', '');

      // Redirect to the new URL
      window.location.href = newUrl;
    }
    }

}
