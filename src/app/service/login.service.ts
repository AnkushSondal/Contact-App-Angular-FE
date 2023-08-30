import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl='http://localhost:8080/api/v1/contactapp/user';

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  login(data :any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token || '');
  }
}
