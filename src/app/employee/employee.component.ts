import { Component, OnInit } from '@angular/core';
import { Employee } from '../services/employee/employee.models';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employee: Employee;
  public employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees()
    .subscribe((emps: Employee[]) => this.employees = emps);
  }

  selected(employee: any){
    this.employee = employee;
  }

}
