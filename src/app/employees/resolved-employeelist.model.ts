import { Employee } from '../Models/employee.model';

export class ResolvedEmployeelist {
    constructor(public employeeList: Employee[], public error: any = null) { }
}
