import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from '../Models/employee.model';
import { Router, ActivatedRoute } from '@angular/router'



@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  selectedEmployeeId: number;
  searchTerm: string;

  constructor(private _empService: EmployeeService, private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.selectedEmployeeId = +this._activatedRoute.snapshot.params['id'];
    this.employees = this._empService.getEmployees();
  }

  onEditClick(empID: number) {
    this._router.navigate(['/editEmployee', empID]);
  }
  deleteEmployee(empID: number) {
    this._empService.deleteEmployee(empID);
  }

}
