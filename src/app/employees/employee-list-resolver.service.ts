import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListResolverService implements Resolve<Employee[]> {
  constructor(private _empService: EmployeeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
    return this._empService.getEmployees();
  }

}
