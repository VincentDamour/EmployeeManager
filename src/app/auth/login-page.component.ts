import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss']
})
export class LoginPageComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).then(() => this.router.navigate(['/employees']));
  }

  onAnonymousLoginClick() {
    this.authService.loginAnonymously().then(() => this.router.navigate(['/employees']));
  }
}
