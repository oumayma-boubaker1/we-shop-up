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
  loginError: string = '';

  loginUserData: User  ;
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }


// loginUser () {
  // this._auth.loginUser(this.loginUserData)



  loginUser() {
    console.log ('form'),
   this._auth.loginUser(this.loginUserData)
   .subscribe(
     res => {
       console.log ('res', res );
       localStorage.setItem('token', res.token );
       this._router.navigate(['/special-events'] );
     },
     err => console.log(err)
   );
 }

}
