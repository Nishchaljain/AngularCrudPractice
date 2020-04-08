import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm: NgForm

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

  onSaveEmployee() {
    const newEmployee = Object.assign({}, this.employee)
    this._empService.insertEmployee(newEmployee);
    this.createEmployeeForm.reset();
    this._router.navigate(['/list'])
  }

}
