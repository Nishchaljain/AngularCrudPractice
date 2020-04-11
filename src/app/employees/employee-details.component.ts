import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  constructor(private _activatedRoute: ActivatedRoute,
    private _empService: EmployeeService,
    private _route: Router) { }

  ngOnInit(): void {
    const id = +this._activatedRoute.snapshot.params['id'];
    this._empService.getEmployeeById(id).subscribe((employee) => this.employee = employee,
      (error: any) => console.log(error))
  }

}
