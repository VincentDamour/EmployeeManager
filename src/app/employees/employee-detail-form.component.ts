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

  uploadFile(event) {
    const file = event.srcElement.files[0];

    if(file && file.size < 1024 * 1024 * 10) {
      const reader = new FileReader();

      reader.onload = event => {
        const url = event.target['result'];

        const binary = atob(url.split(',')[1]);
        const array = [];
        for(let i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
        }

        // send array to server to save directly binary data

        // C# code
        // Byte[] bytes = get bytes from db;
        // HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
        // System.IO.MemoryStream stream = new MemoryStream(bytes);
        // result.Content = new StreamContent(stream);
        // return (result);
      };

      reader.readAsDataURL(file);
    }
  }

  uploadFileTwo(event) {
    const file = event.srcElement.files[0];

    if(file && file.size < 1024 * 1024 * 10) {
      const formData = new FormData();
      formData.append('uploads[]', file, file.name);

      // Do a post request with formData as the data. Be sure to set processData and contentType to false
      // { url: 'file', data: formData, processData: false, contentType: false }

      // C# side
      // Read bytes from DB
      // Copy file (from bytes) to a download folder with the file name + unique hash
      // Send route to file
    }
  }
}
