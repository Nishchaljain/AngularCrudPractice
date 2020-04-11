import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: Employee;


  constructor(private _httpClient: HttpClient) {

  }

  baseUrl = 'http://localhost:3000/employees';

  getEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client side error: ', errorResponse.error.message);
    }
    else {
      console.log('Server side error: ', errorResponse);
    }

    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }

  getEmployeeById(empID: number): Observable<Employee> {
    return this._httpClient.get<Employee>(this.baseUrl + '/' + empID)
      .pipe(catchError(this.handleError));
  }

  insertEmployee(employee: Employee): Observable<Employee> {

    return this._httpClient.post<Employee>(this.baseUrl, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this._httpClient.put<void>(this.baseUrl + '/' + employee.id, employee, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));

  }

  deleteEmployee(empID: number): Observable<void> {
    return this._httpClient.delete<void>(this.baseUrl + '/' + empID
    ).pipe(catchError(this.handleError));
  }

  // deleteEmployeeFromFilteredEmployeeList(filteredEmployees: Employee[], empid: number): Observable<void> {
  //   return this._httpClient.delete<void>(this.baseUrl + '/' + empid
  //   ).pipe(catchError(this.handleError));
  // }
}
