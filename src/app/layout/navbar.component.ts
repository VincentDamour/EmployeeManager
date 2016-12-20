import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() isLoggedIn: boolean;
  @Output() logout = new EventEmitter(false);

  onLogoutClick() {
    this.logout.emit()
  }
}
