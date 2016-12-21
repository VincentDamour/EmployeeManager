import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss']
})
export class FieldErrorComponent implements OnChanges {
  @Input() fieldErrors;

  errorsMap = {
    required: 'This field is required',
    minlength: 'This field required a minimum size of count',
    email: 'This field must be a valid email address'
  };

  errorMsg = '';

  ngOnChanges(changes: SimpleChanges):void {
    const errors = changes['fieldErrors'].currentValue;

    if(errors) {
      const errorKey = Object.keys(errors)[0];

      if(errorKey === "minlength") {
        this.errorMsg = this.errorsMap.minlength.replace(/count/i, errors[errorKey].requiredLength);
      }
      else {
        this.errorMsg = this.errorsMap[errorKey] || '';
      }
    }
    else {
      this.errorMsg = '';
    }
  }
}
