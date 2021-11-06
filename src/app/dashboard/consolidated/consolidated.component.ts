import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/services/dashboard/cusotmer.models';

@Component({
  selector: 'app-consolidated',
  templateUrl: './consolidated.component.html',
  styleUrls: ['./consolidated.component.css']
})
export class ConsolidatedComponent implements OnInit {
  @Input() public customerp: Customer[];
  @Output() public customerSelected = new EventEmitter<Customer>();

  constructor() { }

  ngOnInit(): void {
  }

  selectedCustomer(customer: Customer) {
    this.customerSelected.emit(customer);
  }

}
