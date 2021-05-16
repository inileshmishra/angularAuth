import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../authInterface/authResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(email, password) {
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= ${environment.API_KEY}`, {
      email,
      password,
      returnSecureToken: true
    });
  }

  signIn(email, password) {
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= ${environment.API_KEY}`, {
      email,
      password,
      returnSecureToken: true
    });
  }

}
