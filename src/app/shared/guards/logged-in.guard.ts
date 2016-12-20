import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from "rxjs";

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.auth$
      .take(1)
      .map(authState => !!authState)
      .do(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
        }
      });
  }
}
