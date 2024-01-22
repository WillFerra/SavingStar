import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage{

  email: string | undefined;
  password: string | undefined;
  showAlert : boolean = false;

  constructor(private router: Router) {}

  login() {
    if(this.email == 'abc' && this.password == '123'){
      this.router.navigate(['/tabs']);
    }
    else{
      console.log('Login failed');
      this.showAlert = true;
    }
  }

  hideAlert() {
    this.showAlert = false;
  }

  goToNewPage() {
    this.router.navigate(['/login']);
  }
}
