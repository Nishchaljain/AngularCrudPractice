import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


  employee: Employee = {
    empId: null,
    empName: null,
    empDesignation: null,
    empSalary: null,
    empProjectName: null,
    empManager: null,
  }

  constructor(private _empService: EmployeeService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  onSaveEmployee(employee: Employee) {
    this._empService.insertEmployee(employee);
    this._router.navigate(['/list'])
  }

}
