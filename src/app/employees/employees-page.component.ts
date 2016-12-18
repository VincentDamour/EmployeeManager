import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "../shared/api-services/employees.service";

@Component({
  selector: 'employees-page',
  templateUrl: 'employees-page.component.html',
  styleUrls: ['employees-page.component.scss']
})
export class EmployeesPageComponent implements OnInit {
  isLoading = true;
  employees = [];
  errorMessage = null;

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit() {
    this.employeesService.getEmployees()
      .subscribe(
        employees => {
          this.employees = employees;
          this.isLoading = false;
        },
        error =>  this.errorMessage = <any>error
      );
  }

  trackByEmployeeId = (index, employee) => employee.id;
}
