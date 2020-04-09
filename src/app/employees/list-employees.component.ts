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
  filteredEmployees: Employee[];
  selectedEmployeeId: number;
  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployee(value);
  }

  filterEmployee(searchTerm: string) {
    return this.employees.filter(emp => emp.empName.toLowerCase().indexOf(searchTerm) != -1);
  }


  constructor(private _empService: EmployeeService, private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.selectedEmployeeId = +this._activatedRoute.snapshot.params['id'];
    this._empService.getEmployees().subscribe((response) => {
      this.employees = response;
      if (this._activatedRoute.snapshot.queryParamMap.has('searchTerm')) {
        this.searchTerm = this._activatedRoute.snapshot.queryParamMap.get('searchTerm');
      }
      else {
        this.filteredEmployees = this.employees;
      }
    });



    // console.log(this._activatedRoute.snapshot.queryParamMap.get('searchTerm'));
    // console.log(this._activatedRoute.snapshot.queryParamMap.getAll('searchTerm'));
    // console.log(this._activatedRoute.snapshot.queryParamMap.keys);
    // console.log(this._activatedRoute.snapshot.paramMap.keys);
    // console.log(this._activatedRoute.snapshot.params['id']);  // giving the value of the optional parameter
  }

  onEditClick(empID: number) {
    this._router.navigate(['/editEmployee', empID], {
      queryParams: { 'searchTerm': this.searchTerm, 'testParams': 'testValue' }
    });
  }
  deleteEmployee(empID: number) {
    this._empService.deleteEmployee(empID);
  }

}
