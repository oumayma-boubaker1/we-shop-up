import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Router } from '@angular/router' ;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://localhost:3000/api/register';
  private loginUrl = 'http://localhost:3000/api/login';
  constructor(private http: HttpClient,
              private router: Router) { }


    registerUser(user) {
      return this.http.post<any>(this.registerUrl, user);
    }
    loginUser(user) {
      return this.http.post<any>(this.loginUrl, user);
    }
    logoutUser() {
      localStorage.removeItem('token');
      this.router.navigate(['/special-events']);
    }
    getToken() {
      return localStorage.getItem('token');
    }
    loggedIn() {
      return !!localStorage.getItem('token');
    }
}
