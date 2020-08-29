import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(Name,Password)
  {
    //console.log('before' + this.isUserLoggedIn());
    if(Name=="root" && Password === 'root')
    {
     sessionStorage.setItem('authenticateUser',Name);
     //console.log('after' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user =sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}
