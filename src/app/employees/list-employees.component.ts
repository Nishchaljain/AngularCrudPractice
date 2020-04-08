import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from '../Models/employee.model';
import { Router } from '@angular/router'



@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private _empService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {

    this.employees = this._empService.getEmployees();
  }

  onEditClick(empID: number) {
    this._empService.editEmployee(empID);
    this._router.navigate(['/edit']);

  }
  deleteEmployee(empID: number) {

  }

}
