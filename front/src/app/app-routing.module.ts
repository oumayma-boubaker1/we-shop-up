import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SpecialEventsComponent } from './shared/special-events/special-events.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../services/auth.guard/auth.guard';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';


const routes: Routes = [
  { path: 'productlist', component: UpdateProductComponent,
   children: [
    {path: 'add', component: AddProductComponent}
  //   // {path: }

  ]},
  { path: 'login', component: LoginComponent },
  // { path: 'addProduct', component: AddProductComponent},
  { path: 'special-events', component: SpecialEventsComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'register', component: RegisterComponent },

 // otherwise redirect to home
  { path: '**', redirectTo: 'special-events'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
