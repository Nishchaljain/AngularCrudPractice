import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee.component';


const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListEmployeesComponent, pathMatch: 'full' },
  { path: 'create', component: CreateEmployeeComponent, pathMatch: 'full' },
  { path: 'editEmployee/:id', component: EditEmployeeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
