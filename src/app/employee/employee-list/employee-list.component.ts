import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/services/employee/employee.models';

import { EmployeeService } from 'src/app/services/employee/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() public employees: Employee[];
  @Output() public employeeSelected = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit(): void {
  }

  selectEmployee(emp: Employee) {
    this.employeeSelected.emit(emp);
  }

}
