import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "../shared/api-services/employees.service";

@Component({
  selector: 'employees-detail-page',
  templateUrl: 'employees-detail-page.component.html',
  styleUrls: ['employees-detail-page.component.scss']
})
export class EmployeesDetailPageComponent implements OnInit {
  isLoading = true;
  employee = null;
  errorMessage = null;

  constructor(private employeesService: EmployeesService) {
  }

  ngOnInit() {
    this.employeesService.getEmployee(1)
      .subscribe(
        employee => {
          this.employee = employee;
          this.isLoading = false;
        },
        error =>  this.errorMessage = <any>error
      );
  }
}
