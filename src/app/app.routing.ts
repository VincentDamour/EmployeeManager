import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EmployeesPageComponent } from './employees/employees-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmployeesPageComponent },
  { path: 'employees/new', component: EmployeesPageComponent },
  { path: 'employees/:id', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
