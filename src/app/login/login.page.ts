import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  name: string | undefined;
  surname: string | undefined;
  doB: Date | undefined;
  email: string | undefined;
  password: string | undefined;
  confPassword: string | undefined;
  showAlert : boolean = false;
  signupFailed : boolean = false;
  passwordsMatch : boolean = false;


  constructor(private router: Router) { }

  signup() {
    if(this.name && this.surname && this.doB && this.email && this.password && this.confPassword){
      if(this.password == this.confPassword){
        console.log('Signup successful');
        this.showAlert = true;
        this.router.navigate(['/tabs']);
      }
      else{
        console.log('Passwords do not match');
        this.passwordsMatch = true;
      }
      
    }
    else{
      console.log('Signup failed');
      this.signupFailed = true;
    }
  }

  hideAlert() {
    this.showAlert = false;
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
