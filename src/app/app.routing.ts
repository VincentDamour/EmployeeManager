import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: AboutComponent },
  { path: 'employees/new', component: AboutComponent },
  { path: 'employees/:id', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
