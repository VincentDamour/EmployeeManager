import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GlobalValidator } from "../shared/global.validator";

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = fb.group({
      email: ['', [Validators.required, GlobalValidator.mailFormat]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    if(this.form.valid) {
      this.authService.login(this.form.value.email, this.form.value.password).then(() => this.router.navigate(['/employees']));
    }
  }

  onAnonymousLoginClick() {
    this.authService.loginAnonymously().then(() => this.router.navigate(['/employees']));
  }
}
