import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

import { SpecialEventsComponent } from './special-events/special-events.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'special-events', component: SpecialEventsComponent, canActivate: [AuthGuard] },// profile de client
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
