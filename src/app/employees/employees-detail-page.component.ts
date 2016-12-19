import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import Employee from "../shared/models/Employee";

@Component({
  selector: 'employees-detail-page',
  templateUrl: 'employees-detail-page.component.html',
  styleUrls: ['employees-detail-page.component.scss']
})
export class EmployeesDetailPageComponent implements OnInit, OnChanges {
  isLoading: boolean = false;
  employeeId: number = null;
  employee: FirebaseObjectObservable<Employee>;
  internalEmployee: Employee;

  constructor(private route: ActivatedRoute, private af: AngularFire) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeId = +params['id'];
      this.employee = this.af.database.object(`/employees/${this.employeeId}`);
    });
  }

  ngOnChanges(changes:any):void {
    var hasChanged = changes.originalEmployee.currentValue;
    console.log(changes);
    if (hasChanged) {
      console.log("changed");
    }
  }

  onSubmit() {
    console.log("submit");
  }
}
