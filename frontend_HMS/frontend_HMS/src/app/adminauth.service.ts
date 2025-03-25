import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username2 :string , password : string){
    if(username2 == "Admin" && password == "adminpass"){
      sessionStorage.setItem('username',username2)
    
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("User LoggedIn Successfully")
    let user  = sessionStorage.getItem('username')
    return !(user==null)
  }
  
  logout(){
    console.log("Logged Out Successfully")
    sessionStorage.removeItem('username')
  }
}
