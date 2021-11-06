import { Component, OnInit } from '@angular/core';
import { Customer } from '../services/dashboard/cusotmer.models';
import { CustomerService } from '../services/dashboard/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public customers_parent: Customer[] = [];
  public customer_parent: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomer().subscribe(customerData => this.customers_parent = customerData);
  }

  selected(customer: any){
    this.customer_parent = customer;
  }

}
