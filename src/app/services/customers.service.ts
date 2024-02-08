import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Customers } from '../models/customers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Customers> {
    return this.http.get<Customers>(`${API_CONFIG.baseUrl}/user/find-by-id/${id}`);
  }

  findAll(): Observable<Customers[]>{
    return this.http.get<Customers[]>(`${API_CONFIG.baseUrl}/user/find-all`);
  }

  create(customer: Customers): Observable<Customers> {
    return this.http.post<Customers>(`${API_CONFIG.baseUrl}/user/create`, customer)
  }

  update(customer: Customers): Observable<Customers> {
    return this.http.put<Customers>(`${API_CONFIG.baseUrl}/user/update/${customer.id}`, customer)
  }

  delete(id: any): Observable<Customers> {
    return this.http.delete<Customers>(`${API_CONFIG.baseUrl}/user/delete/${id}`)
  }
}

