import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { User } from '../../../Models/user';
import { FormsModule } from '@angular/forms';

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


  loginUser(f: NgForm) {

    console.log ('form');
    console.log(f.value.login);
    //loginUserData = new userInfo
    this.loginUserData = {
      email : f.value.login,
      password : f.value.password
    }
    this.auth.loginUser(this.loginUserData)
   .subscribe(
     res => {
       console.log ('res', res );
       localStorage.setItem('token', res.token );
       this.router.navigate(['/home'] );
     },
     err => console.log(err)
   );
 }

}
