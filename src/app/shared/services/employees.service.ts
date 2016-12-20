import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import AppConfig from "../../../config"
import { extractData, handleError } from '../utils/api-helper';
import Employee from "../models/Employee";

@Injectable()
export class EmployeesService {
  private url = `${AppConfig.apiUrl}/users`;

  constructor(private http: Http) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get(this.url).map(extractData).catch(handleError);
  }

  public getEmployee(id): Observable<Employee> {
    return this.http.get(`${this.url}/${id}`).map(extractData).catch(handleError);
  }
}
