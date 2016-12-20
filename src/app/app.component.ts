import { Component } from '@angular/core';
import '../style/app.scss';
import { AuthService } from "./shared/services/auth.service";

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoggedIn = false;

  constructor(authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  onLogoutClick() {
    console.log('logout');
  }
}
