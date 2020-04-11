import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee.component';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';
import { PageNotFoundComponent } from './pagenotfound/page-not-found.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { SortEmployeesPipe } from './employees/sort-employees.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent,
    EmployeeDetailsComponent,
    SortEmployeesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
