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

  confirmDelete = false;

  error: string;

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
    private _activatedRoute: ActivatedRoute) {

    const resolvedData: Employee[] | string = this._activatedRoute.snapshot.data['employeeList'];


    if (Array.isArray(resolvedData)) {
      this.employees = resolvedData;
    }
    else {
      this.error = resolvedData;
    }

    this.selectedEmployeeId = +this._activatedRoute.snapshot.params['id'];

    if (this._activatedRoute.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._activatedRoute.snapshot.queryParamMap.get('searchTerm');
    }
    else {
      this.filteredEmployees = this.employees;
    }
  }

  ngOnInit(): void {

  }

  viewEmployee(empID: number) {
    this._router.navigate(['/employeeDetail', empID], {
      queryParams: { 'searchTerm': this.searchTerm }
    });
  }

  onEditClick(empID: number) {
    this._router.navigate(['/edit', empID]);
  }
  deleteEmployee(empID: number) {
    this._empService.deleteEmployee(empID).subscribe(() => console.log('Employee deleted successfuly.'),
      (error: any) => console.log(error));
    // this._empService.deleteEmployeeFromFilteredEmployeeList(this.filteredEmployees, empID).subscribe((success) => console.log(success),
    //   (error: any) => console.log(error));
  }

}
