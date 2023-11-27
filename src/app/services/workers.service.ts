import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { Workers } from '../models/workers';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Workers> {
    return this.http.get<Workers>(`${API_CONFIG.baseUrl}/user/find-by-id/${id}`);
  }

  findAll(): Observable<Workers[]>{
    return this.http.get<Workers[]>(`${API_CONFIG.baseUrl}/user/find-all`);
  }

  create(worker: Workers): Observable<Workers> {
    return this.http.post<Workers>(`${API_CONFIG.baseUrl}/user/create-user`, worker)
  }

  update(worker: Workers): Observable<Workers> {
    return this.http.put<Workers>(`${API_CONFIG.baseUrl}/user/update-user/${worker.id}`, worker)
  }

  delete(id: any): Observable<Workers> {
    return this.http.delete<Workers>(`${API_CONFIG.baseUrl}/user/delete-user/${id}`)
  }
}
