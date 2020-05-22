import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  focus;
  focus1;
  focus2;
  errorMessage = '';
  registerUserData: User = { };
  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    console.log ('form');
    this.auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log ('res', res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/special-events']);
      },
      err => console.log(err)
    );
  }


}
