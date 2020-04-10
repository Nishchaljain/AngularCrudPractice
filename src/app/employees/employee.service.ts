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

  employees: Employee[] = [
    {
      empId: 1,
      empName: "Nishchal",
      empDesignation: "Senior Software Engineer",
      empSalary: 100000,
      empProjectName: "Sedgwick",
      empManager: "Namitha"

    },
    {
      empId: 2,
      empName: "Pawan",
      empDesignation: "Project Lead",
      empSalary: 150000,
      empProjectName: "Sedgwick",
      empManager: "Namitha"

    },
    {
      empId: 3,
      empName: "Paniraj",
      empDesignation: "Project Architecture",
      empSalary: 100000,
      empProjectName: "Sedgwick",
      empManager: "Namitha"

    },
    {
      empId: 4,
      empName: "Sangeeta",
      empDesignation: "Senior Software Engineer",
      empSalary: 100000,
      empProjectName: "Sedgwick",
      empManager: "Namitha"

    },
    {
      empId: 5,
      empName: "Nagaraj",
      empDesignation: "Tester",
      empSalary: 100000,
      empProjectName: "Sedgwick",
      empManager: "Namitha"

    }
  ];

  constructor(private _httpClient: HttpClient) {

  }



  getEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>('http://localhost:3000/employees')
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

  getEmployeeById(empID: number): Employee {
    return this.employees.find(e => e.empId === empID);
  }

  insertEmployee(employee: Employee, paramEmpId: number): Observable<Employee> {
    if (paramEmpId === 0) {
      return this._httpClient.post<Employee>('http://localhost:3000/employees', employee, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError));

    } else {
      const foundIndex = this.employees.findIndex(e => e.empId == employee.empId);
      this.employees[foundIndex] = employee;
    }
  }

  // This method is no longer in use as now we are handling the update logic in the insertEmployee method based on the emp id.
  //If the empid is null we know its a new record or if its not null that means we need to update an existing record

  updateEmployee(employee: Employee) {
    const index = this.employees.findIndex(e => e.empId == employee.empId);
    this.employees[index] = employee;
  }

  deleteEmployee(empID: number) {
    const index = this.employees.findIndex(e => e.empId === empID);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  deleteEmployeeFromFilteredEmployeeList(filteredEmployees: Employee[], empid: number) {
    const index = filteredEmployees.findIndex(e => e.empId === empid);
    if (index !== -1) {
      filteredEmployees.splice(index, 1);
    }
  }
}
