import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthenticateService } from '../docauthenticate.service';

@Component({
  selector: 'app-doctor-login',
  standalone: false,
  templateUrl: './doctor-login.component.html',
  styleUrl: './doctor-login.component.css'
})
export class DoctorLoginComponent {
      username:string='';
      password:string='';

      inValidLogin = false;
      constructor(private router :Router ,private docauth : DocauthenticateService){

      }

      checkLogin(){
        if(this.docauth.authenticate(this.username,this.password)){
          this.router.navigate(['docdash'])
          this.inValidLogin =false;
        }

        else{

          this.inValidLogin = true;
          alert("Wrong Username Or Password")
          this.router.navigate(['doctor-login']);
         
        }
      }
}
