import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: false,
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

username2 : string = ''
password :string=""
isValidLogin = false;

  constructor(private adminauth: AdminauthService , private router :Router){
  }
    checkLogin(){
    if(this.adminauth.authenticate(this.username2,this.password)){
      this.router.navigate(['/admin'])
      this.isValidLogin = false;
    }

    else{
      this.isValidLogin = true;
      alert("Wrong credentials"); 
      this.router.navigate(['/admin-login'])
    }
  }

}
