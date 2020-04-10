import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { Observable, observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { ActivatedRoute } from '@angular/router';


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

  constructor(private _activatedRoute: ActivatedRoute) {

  }



  getEmployees(): Observable<Employee[]> {
    return Observable.of(this.employees).delay(2000);
  }

  getEmployeeById(empID: number): Employee {
    return this.employees.find(e => e.empId === empID);
  }

  insertEmployee(employee: Employee, paramEmpId: number) {
    if (paramEmpId === 0) {
      this.employees.push(employee);
    } else {
      const foundIndex = this.employees.findIndex(e => e.empId == employee.empId);
      this.employees[foundIndex] = employee;
    }
  }

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
