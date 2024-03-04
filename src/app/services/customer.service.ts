import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = "https://localhost:7004/api";

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    console.log('Customer Data');
    return this.httpClient.get<ListResponseModel<Customer>>(`${this.apiUrl}/Customers/getall`);
  }
}
