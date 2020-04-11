import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm: NgForm

  employee: Employee = {
    id: null,
    empName: null,
    empDesignation: null,
    empSalary: null,
    empProjectName: null,
    empManager: null,
  }

  constructor(private _empService: EmployeeService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const id = +this._activatedRoute.snapshot.params['id'];
    this._empService.getEmployeeById(id).subscribe(
      (employee) => this.employee = employee,
      (error: any) => console.log(error))
  }



  onSaveEmployee() {
    const empId = +this._activatedRoute.snapshot.params['id'];
    if (empId == 0) {
      this._empService.insertEmployee(this.employee)
        .subscribe((data: Employee) => {
          console.log(data);
          this.createEmployeeForm.reset();
          this._router.navigate(['/list'])
        },
          (error: any) => {
            console.log(error);

          })
    }
    else {
      this._empService.updateEmployee(this.employee)
        .subscribe(() => {
          this.createEmployeeForm.reset();
          this._router.navigate(['/list'])
        },
          (error: any) => {
            console.log(error);

          })
    }


  }

}
