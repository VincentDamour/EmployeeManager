import { Component, Input, Output, EventEmitter } from '@angular/core';
import Employee from '../shared/models/Employee';

@Component({
  selector: 'employee-detail-form',
  templateUrl: 'employee-detail-form.component.html',
  styleUrls: ['employee-detail-form.component.scss']
})
export class EmployeeDetailFormComponent {
  @Input() employee: Employee;
  @Input() canEdit: boolean;
  @Output() submit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  onSubmit() {
    this.submit.emit({ value: this.employee });
  }

  onDelete() {
    this.delete.emit();
  }
}
