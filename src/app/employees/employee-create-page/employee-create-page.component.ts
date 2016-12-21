import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import Employee from "../../shared/models/Employee";

@Component({
  selector: 'employee-create-page',
  templateUrl: 'employee-create-page.component.html',
  styleUrls: ['employee-create-page.component.scss']
})
export class EmployeesCreatePageComponent implements OnInit {
  isLoading: boolean = false;
  employee: Employee = new Employee();
  employees: FirebaseListObservable<Employee[]>;

  constructor(private af: AngularFire, private router: Router) {}

    ngOnInit() {
      this.employees = this.af.database.list('/employees');
    }

  onSubmit(event) {
    if(event && event.value) {
      this.employees.push(event.value).then(() => this.router.navigate(['/employees']));
    }
  }
}
