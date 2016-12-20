import { Component } from '@angular/core';
import Login from "../shared/models/Login";

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss']
})
export class LoginPageComponent {
  login: Login = new Login();

  onSubmit() {
    console.log(this.login);
  }
}
