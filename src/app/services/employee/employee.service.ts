import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from './employee.models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Test Name1',
      email: 'Test Address',
      address: ""
    },
    {
      id: 1,
      name: 'Test Name2',
      email: 'Test Address2',
      address: ""
    },
    {
      id: 1,
      name: 'Test Name3',
      email: 'Test Address3',
      address: ""
    }
  ];

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }

}
