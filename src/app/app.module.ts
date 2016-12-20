import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NavbarComponent } from "./layout/navbar.component";
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './auth/login-page.component';
import { EmployeesPageComponent } from './employees/employees-page.component';
import { EmployeesDetailPageComponent } from './employees/employees-detail-page.component';
import { EmployeeDetailFormComponent } from './employees/employee-detail-form.component';
import { LoaderComponent } from './common/loader/loader.component';
import { EmployeesService, AuthService } from './shared/services';
import { LoggedInGuard } from './shared/guards/logged-in.guard';
import { AdminGuard } from './shared/guards/admin.guard';
import { MoneyPipe } from './shared/money.pipe';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import { firebaseConfig } from '../config/firebase.config'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginPageComponent,
    EmployeesPageComponent,
    EmployeesDetailPageComponent,
    EmployeeDetailFormComponent,
    LoaderComponent,
    MoneyPipe
  ],
  providers: [
    EmployeesService,
    AuthService,
    LoggedInGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
