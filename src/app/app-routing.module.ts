import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service'
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { PageNotFoundComponent } from './pagenotfound/page-not-found.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeDetailsGaurdService } from './employees/employee-details-gaurd.service';


const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListEmployeesComponent,
    resolve: { employeeList: EmployeeListResolverService },
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService],
    pathMatch: 'full'
  },
  {
    path: 'editEmployee/:id',
    component: EditEmployeeComponent,
    pathMatch: 'full'
  },
  {
    path: 'employeeDetail/:id',
    component: EmployeeDetailsComponent,
    pathMatch: 'full',
    canActivate: [EmployeeDetailsGaurdService]
  },
  {
    path: 'notfound',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    CreateEmployeeCanDeactivateGuardService,
    EmployeeListResolverService,
    EmployeeDetailsGaurdService
  ]
})
export class AppRoutingModule { }
