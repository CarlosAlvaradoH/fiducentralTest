import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: string = "";
  pass: string = "";
  invalid: boolean = false;

  constructor(
    private router: Router
  ) { }

  login(){
    this.invalid = false
    if(
      this.user != 'jhon' && this.user != "carlos" || 
      this.pass == '' 
    ){
      this.invalid = true
      return
    }
    console.log(this.user)

    this.router.navigate(['/extractos'])



  }

}
