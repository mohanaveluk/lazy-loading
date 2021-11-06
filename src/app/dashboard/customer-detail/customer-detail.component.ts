import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/services/dashboard/cusotmer.models';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

    @Input() public customer: Customer;

  constructor() { }

  ngOnInit(): void {
  }


}
