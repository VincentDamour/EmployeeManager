import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './shared/guards/logged-in.guard';
import { AdminGuard } from './shared/guards/admin.guard';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './auth/login-page.component';
import { EmployeesPageComponent } from './employees/employees-page.component';
import { EmployeesDetailPageComponent } from './employees/employees-detail-page.component';
import { EmployeesCreatePageComponent } from './employees/employee-create-page/employee-create-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'employees', component: EmployeesPageComponent, canActivate: [LoggedInGuard] },
  { path: 'employees/new', component: EmployeesCreatePageComponent, canActivate: [LoggedInGuard, AdminGuard] },
  { path: 'employees/:id', component: EmployeesDetailPageComponent, canActivate: [LoggedInGuard] }
];

export const routing = RouterModule.forRoot(routes);
