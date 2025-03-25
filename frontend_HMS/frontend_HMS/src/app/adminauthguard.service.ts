import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AdminauthService } from './adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService implements CanActivate{

  constructor(private adminauthservice : AdminauthService , private router : Router) { }
  canActivate() {
    if(this.adminauthservice.isUserLoggedIn()){
      
      return true;
    }
    else{
      this.router.navigate(['admin-login'])
      return false;
    }


  }

}
