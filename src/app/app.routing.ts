import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmployeesPageComponent } from './employees/employees-page.component';
import { EmployeesDetailPageComponent } from "./employees/employees-detail-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmployeesPageComponent },
  { path: 'employees/new', component: EmployeesDetailPageComponent },
  { path: 'employees/:id', component: EmployeesDetailPageComponent }
];

export const routing = RouterModule.forRoot(routes);
