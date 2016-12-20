import { Component } from '@angular/core';
import { Router } from "@angular/router";
import Login from "../shared/models/Login";
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss']
})
export class LoginPageComponent {
  login: Login = new Login();

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log(this.login);
  }

  onAnonymousLoginClick() {
    this.authService.loginAnonymously().then(() => this.router.navigate(['/employees']));
  }
}
