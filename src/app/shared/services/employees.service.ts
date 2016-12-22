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

  public getNumbers(): Observable<number> {
    return new Observable(observer => {
      setTimeout(() => observer.next(10), 500);
      setTimeout(() => observer.next(20), 1000);
      setTimeout(() => observer.next(30), 1500);
      setTimeout(() => observer.next(40), 2000);
      setTimeout(() => observer.next(50), 4000);
      setTimeout(() => observer.complete(), 5000);
    })
  }
}
