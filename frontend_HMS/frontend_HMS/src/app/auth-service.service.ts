import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080'; // Backend URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string, role: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/login`, { username, password, role });
  }
}
