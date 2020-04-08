import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee.model';


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

  constructor() { }

  getEmployees() {
    return this.employees;
  }

  insertEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  editEmployee(empID: number) {
    return this.employees.find(e => e.empId === empID);
  }
}
