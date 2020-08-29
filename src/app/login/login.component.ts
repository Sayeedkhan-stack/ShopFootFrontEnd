import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Name='root'
  Password=''
  errorMessage='Invalid Credentials'
  invalidLogin=false
  constructor(private router : Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void { }
  handleLogin(){
    // console.log(this.username);
    // if(this.Name=="root" && this.Password=== 'root')
    if(this.hardcodedAuthenticationService.authenticate(this.Name, this.Password)){
      this.router.navigate(['welcome', this.Name])
      this.invalidLogin= false
    }
    else
    {
      this.invalidLogin = true
    }
    
  }

}
