import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
import { map, catchError } from 'rxjs/operators'
import { ResolvedEmployeelist } from './resolved-employeelist.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListResolverService implements Resolve<ResolvedEmployeelist> {
  constructor(private _empService: EmployeeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedEmployeelist> {
    return this._empService.getEmployees()
      .pipe(
        map((employeeList) => new ResolvedEmployeelist(employeeList)),

        catchError((err: any) => Observable.of(new ResolvedEmployeelist(null, err)))

      );
  }

}
