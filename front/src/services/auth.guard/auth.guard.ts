import { Injectable } from '@angular/core';
import { CanActivate, Route,  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const myToken = localStorage.getItem('token');
      if (myToken) {
        return true;
      }
      else {
        return false;
      }
  }

}

////
 // constructor(private _authService: AuthService,
   // private _router: Router) { }

 // canActivate(): boolean {
   // if (this._authService.loggedIn()) {
     // console.log('true')
     // return true
    // } // else {
      // console.log('false')
      // this._router.navigate(['/login'])
      // return false
    // }
 // }
// }
