import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginData } from 'src/app/auth/interfaces/login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authSvc: AuthService
  ){}


  data:LoginData = {
    email: '',
    password: ''
  }

  login(){
    this.authSvc.login(this.data)
    .subscribe(accessData => {
      alert(`You are logged in as ${accessData.user.name}`)
    })
  }
}
