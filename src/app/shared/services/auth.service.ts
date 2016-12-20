import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { extractData } from '../utils/api-helper';
import { FirebaseAuthState, AuthProviders, AuthMethods, FirebaseAuth } from "angularfire2";

@Injectable()
class AuthServiceHttp {
  private loggedIn = false;
  private roles = [];

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('token');
  }

  login(email, password) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post('/login', JSON.stringify({ email, password }), { headers } )
      .map(extractData)
      .map(res => {
        if (res.success) {
          localStorage.setItem('token', res.auth_token);
          this.loggedIn = true;
        }

        return res.success;
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  isAdmin() {
    return this.roles.includes("ADMIN");
  }
}

@Injectable()
export class AuthService {
  private roles = [];
  private authState: FirebaseAuthState = null;

  constructor(public auth$: FirebaseAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state
    });
  }

  get isLoggedIn(): boolean {
    return this.authState !== null;
  }

  get isAdmin(): boolean {
    return this.roles.includes("ADMIN");
  }

  login(email: string, password: string): firebase.Promise<FirebaseAuthState> {
    return this.auth$
      .login({ email, password }, { provider: AuthProviders.Password, method: AuthMethods.Password })
      .then(() => this.roles.push('ADMIN'))
      .catch(error => console.log('ERROR @ AuthService#login() :', error));
  }

  loginAnonymously(): firebase.Promise<FirebaseAuthState> {
    return this.auth$
      .login({ provider: AuthProviders.Anonymous, method: AuthMethods.Anonymous })
      .catch(error => console.error('ERROR @ AuthService#loginAnonymously() :', error));
  }

  logout(): void {
    this.auth$.logout();
    this.roles = [];
  }
}
