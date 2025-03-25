import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { DocauthenticateService } from './docauthenticate.service';

@Injectable({
  providedIn: 'root'
})
export class DocauthgaurdService implements CanActivate {

  constructor(private docauthservice: DocauthenticateService, private router: Router) { }
  canActivate(){
     if(this.docauthservice.isUserLoggedIn()){
      return true;
     }

     else {
      this.router.navigate(['doctor-login'])
      return false;
     }


  } 
}
