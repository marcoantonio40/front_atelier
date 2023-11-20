import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { Observable, tap } from 'rxjs';
import { ResponseLogin } from '../models/responseLogin';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private httpClient: HttpClient) { }

  public authenticate(creds: Credentials): Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>(
      `${API_CONFIG.baseUrl}/login/token`, 
      creds)
  }

  successfulLogin(auhtToken: string){
    localStorage.setItem('token', auhtToken);
  }

  isAuthenticated(){
    let token = localStorage.getItem('token')
    if(token != null){
      return !this.jwtService.isTokenExpired(token);
    }

    return false;
  }
}
