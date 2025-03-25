import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthenticateService {

  constructor() { }


  authenticate(username:string , password :string){
  if(username=="Adarsh" &&  password=="adarshhh"){
    sessionStorage.setItem('username',username);
   
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
