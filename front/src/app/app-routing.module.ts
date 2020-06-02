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
  { path: 'product',
  children: [
    {path: 'product-details/:id', component: ProductDetailsComponent}
    // {path: }

  ]},
  { path: 'login', component: LoginComponent },
  { path: 'addProduct', component: AddProductComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: SpecialEventsComponent },
  { path: 'register', component: RegisterComponent },

 // otherwise redirect to home
  { path: '**', redirectTo: 'special-events'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
