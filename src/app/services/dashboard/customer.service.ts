import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './cusotmer.models';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Customer[] = [
    {id: 101, name: 'Amazon', location: 'Austing TX'},
    {id: 102, name: 'Microsoft', location: 'Seatle WA'},
    {id: 103, name: 'Apple', location: 'Cupertinio CA'},
    {id: 104, name: 'Tesla', location: 'San Fransisco CA'},
  ]


  constructor() { }

  getCustomer(): Observable<Customer[]> {
    return of(this.customers);
  }

}
