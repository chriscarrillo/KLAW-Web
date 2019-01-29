import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersApiService } from 'src/apiServices/user/users-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private user: UsersApiService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.user.isLoggedIn().pipe(map(res => {
        console.log("Logged in: " + res.success);
        if (res.success) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      }));
  }
}
