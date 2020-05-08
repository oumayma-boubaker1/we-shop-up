import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { SpecialEventsComponent } from './special-events/special-events.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../services/auth.guard/auth.guard';
import { ProductDetailsComponent } from './home/product-list/product-details/product-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductDetailsComponent},
  { path: 'special-events', component: SpecialEventsComponent, canActivate: [AuthGuard] }, // profile de client
  { path: 'register', component: RegisterComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
