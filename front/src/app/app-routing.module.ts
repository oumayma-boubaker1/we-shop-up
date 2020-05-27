import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SpecialEventsComponent } from './shared/special-events/special-events.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../services/auth.guard/auth.guard';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { AddProductComponent } from './product/add-product/add-product.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductDetailsComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'special-events', component: SpecialEventsComponent, canActivate: [AuthGuard] }, // profile de client
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
 // otherwise redirect to home
  { path: '**', redirectTo: 'special-events'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
