import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "../shared/api-services/employees.service";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import Employee from "../shared/models/Employee";

@Component({
  selector: 'employees-page',
  templateUrl: 'employees-page.component.html',
  styleUrls: ['employees-page.component.scss']
})
export class EmployeesPageComponent implements OnInit {
  // isLoading = true;
  // errorMessage = null;
  employees: FirebaseListObservable<Employee[]>;

  // constructor(private employeesService: EmployeesService) {
  // }

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    // this.employeesService.getEmployees()
    //   .subscribe(
    //     employees => {
    //       this.employees = employees;
    //       this.isLoading = false;
    //     },
    //     error =>  this.errorMessage = <any>error
    //   );
    this.employees = this.af.database.list('/employees');
  }

  trackByEmployeeId = (index, employee) => employee.id;
}
