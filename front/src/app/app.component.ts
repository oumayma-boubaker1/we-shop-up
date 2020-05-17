import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  constructor(public _authService: AuthService){
    const serverURL = 'https://turing-backend-v2.herokuapp.com/api/';
    // const serverURL = 'https://turing-backend-v2.herokuapp.com/api/';
    localStorage.setItem('ServerUrl', serverURL);
  }
}
