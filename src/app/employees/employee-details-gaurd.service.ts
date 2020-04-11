import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsGaurdService implements CanActivate {

  constructor(private _emplService: EmployeeService,
    private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._emplService.getEmployeeById(+route.paramMap.get('id')).pipe(
      map(employee => {
        const employeeExists = !!employee
        if (employeeExists) {
          return true;
        } else {
          this._router.navigate(['notfound']);
          return false;
        }
      }),
      catchError((err) => {
        console.log(err);
        return Observable.of(false);
      })
    );


  }

}
