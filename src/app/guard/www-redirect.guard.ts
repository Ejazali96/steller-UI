// www-redirect.guard.ts
import { Injectable, inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

class PermissionsService {
    redirectionDone = false;
    constructor(private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        if (this.redirectionDone) {
            return true; // Allow navigation
          }
          console.log('new url',window.location.hostname)
          if (window.location.hostname.startsWith('www.')) {
            const newUrl = window.location.protocol + '//' + window.location.hostname.slice(4) + window.location.pathname;
            this.router.navigate([newUrl],{ replaceUrl: true });
            this.redirectionDone = true;
            console.log('new url',newUrl)
            return false;
          }
        
            return true;
          }

  }


  export const WwwRedirectGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(PermissionsService).canActivate(next, state);
  }
// export class WwwRedirectGuard implements CanActivate {
//   constructor(private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     // Check for a custom flag (e.g., query parameter) to trigger redirection locally
//     const isLocalDevelopment = window.location.hostname === 'localhost' && window.location.search.includes('redirectwww=true');

//     if (isLocalDevelopment || window.location.hostname.startsWith('www.')) {
//       const newUrl = window.location.protocol + '//' + window.location.hostname.replace('www.', '') + window.location.pathname;
//       this.router.navigateByUrl(newUrl);
//       return false;
//     }
//     return true;
//   }
// }
