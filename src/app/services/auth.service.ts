import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth/login'; // URL da API de login do backend

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user, { observe: 'response' });
  }
}
