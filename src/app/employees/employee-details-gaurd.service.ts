import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsGaurdService implements CanActivate {

  constructor(private _emplService: EmployeeService,
    private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const employeeExists = !!this._emplService.getEmployeeById(+route.paramMap.get('id'));

    if (employeeExists) {
      return true;
    } else {
      this._router.navigate(['notfound']);
      return false;
    }
  }

}
