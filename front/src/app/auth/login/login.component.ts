import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

import { User } from 'src/app/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  loginError = '';

  loginUserData: User  ;
  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

// loginUser () {
  // this._auth.loginUser(this.loginUserData)

  loginUser() {
    console.log ('form'),
   this.auth.loginUser(this.loginUserData)
   .subscribe(
     res => {
       console.log ('res', res );
       localStorage.setItem('token', res.token );
       this.router.navigate(['/special-events'] );
     },
     err => console.log(err)
   );
 }

}
