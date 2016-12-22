import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import Employee from "../shared/models/Employee";
import { AuthService } from "../shared/services/auth.service";
import { decode } from '../shared/utils/encoding';

@Component({
  selector: 'employees-detail-page',
  templateUrl: 'employees-detail-page.component.html',
  styleUrls: ['employees-detail-page.component.scss']
})
export class EmployeesDetailPageComponent implements OnInit {
  isLoading: boolean = false;
  employeeId: string = null;
  employee: FirebaseObjectObservable<Employee>;
  isAdmin: boolean;

  constructor(private route: ActivatedRoute, private af: AngularFire, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeId = decode(params['id']);
      this.employee = this.af.database.object(`/employees/${this.employeeId}`);
    });

    this.isAdmin = this.authService.isAdmin;
  }

  onSubmit(event) {
    if(event.value && event.value.id) {
      const { name, email, phone, website, type, salary, notes } = event.value;
      this.employee.update({ name, email, phone, website, type, salary, notes: notes || '' });
    }
  }

  onDelete() {
    this.employee.remove().then(() => this.router.navigate(['/employees']));
  }
}
