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

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(empID: number): Employee {
    return this.employees.find(e => e.empId === empID);
  }

  insertEmployee(employee: Employee) {
    this.employees.push(employee);
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
}
