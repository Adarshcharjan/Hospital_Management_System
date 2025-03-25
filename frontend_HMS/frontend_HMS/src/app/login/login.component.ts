import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  role = 'doctor';
  loggedInUser: { user: string, role: string } | null = null; 


  constructor(private http: HttpClient) {}

  onLogin() {
    const loginData = { username: this.username, password: this.password, role: this.role };

    this.http.post('http://localhost:8080/api/auth/login', loginData, { responseType: 'text', withCredentials: true })
      .subscribe(
        response => {
          alert(response);
          this.getSessionDetails();  // Fetch session details
        },
        error => alert('Login Failed')
      );
  }

  getSessionDetails() {
    this.http.get<{ user: string, role: string }>('http://localhost:8080/api/auth/session', { withCredentials: true })
      .subscribe(response => {
        this.loggedInUser = response;
      });
  }
  

  onLogout() {
    this.http.post('http://localhost:8080/api/auth/logout', {}, { responseType: 'text', withCredentials: true })
      .subscribe(response => {
        alert(response);
        this.loggedInUser = null;
      });
  }
}

