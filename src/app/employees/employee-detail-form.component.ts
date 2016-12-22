import { Component, Input, Output, EventEmitter } from '@angular/core';
import Employee from '../shared/models/Employee';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'employee-detail-form',
  templateUrl: 'employee-detail-form.component.html',
  styleUrls: ['employee-detail-form.component.scss']
})
export class EmployeeDetailFormComponent {
  @Input() employee: Employee;
  @Input() canEdit: boolean;
  @Input() canDelete: boolean;
  @Output() submit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  cities: SelectItem[];

  selectedCity: string;

  constructor() {
    this.cities = [];
    this.cities.push({label:'Select City', value:null});
    this.cities.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.cities.push({label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}});
    this.cities.push({label:'London', value:{id:3, name: 'London', code: 'LDN'}});
    this.cities.push({label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}});
    this.cities.push({label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}});
  }

  onSubmit() {
    this.submit.emit({ value: this.employee });
  }

  onDelete() {
    this.delete.emit();
  }
}
