import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../Models/employee.model';


@Pipe({
    name: 'employeeCustomFilter',
    pure: true
})

export class EmployeeFilterPipe implements PipeTransform {
    transform(employeeList: Employee[], searchTerm: string): Employee[] {
        if (!employeeList || !searchTerm) {
            return employeeList;
        }
        else {
            return employeeList.filter(employee =>
                employee.empName.toLowerCase().indexOf(searchTerm) !== -1);
        }
    }
}
