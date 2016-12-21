import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "../shared/services/employees.service";
import { AuthService } from "../shared/services/auth.service";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import Employee from "../shared/models/Employee";

@Component({
  selector: 'employees-page',
  templateUrl: 'employees-page.component.html',
  styleUrls: ['employees-page.component.scss']
})
export class EmployeesPageComponent implements OnInit {
  // isLoading = true;
  currentType = 'ALL';
  employees: FirebaseListObservable<Employee[]> = null;
  isAdmin: boolean = false;

  constructor(private af: AngularFire, private employeesService: EmployeesService, authService: AuthService) {
    this.isAdmin = authService.isAdmin;
   }

  ngOnInit() {
    // this.employeesService.getEmployees()
    //   .subscribe(
    //     employees => {
    //       this.employees = employees;
    //       this.isLoading = false;
    //     },
    //     error => console.error(error)
    //   );

    this.employees = this.af.database.list('/employees');
  }

  trackByEmployeeId = (index, employee) => employee.id;

  onTypeChange(type: string) {
    if(type === 'ALL') {
      this.employees = this.af.database.list('/employees', {
        query: { orderByChild: null, equalTo: null }
      });
    }
    else {
      this.employees = this.af.database.list('/employees', {
        query: { orderByChild: 'type', equalTo: type }
      });
    }
  }
}
