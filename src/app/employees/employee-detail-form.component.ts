import { Component, OnChanges, Input } from '@angular/core';
import Employee from "../shared/models/Employee";

@Component({
  selector: 'employee-detail-form',
  templateUrl: 'employee-detail-form.component.html',
  styleUrls: ['employee-detail-form.component.scss']
})
export class EmployeeDetailFormComponent implements OnChanges {
  @Input() employee:Employee;

  ngOnChanges(changes:any):void {
    const hasChanged = changes.employee.currentValue;
    if (hasChanged) {
      console.log(changes.employee.currentValue);
    }
  }

  onSubmit() {
    console.log("submit");
  }
}
