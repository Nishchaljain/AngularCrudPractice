import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../Models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee;
  constructor(private _activatedRoute: ActivatedRoute,
    private _empService: EmployeeService,
    private _route: Router) { }

  ngOnInit(): void {
    const id = +this._activatedRoute.snapshot.params['id'];
    this.employee = Object.assign({}, this._empService.getEmployeeById(id));
  }

  onUpdateClick(employee: Employee) {

    this._empService.updateEmployee(employee);
    this._empService.getEmployees();
    this._route.navigate(['/list']);

  }

}
