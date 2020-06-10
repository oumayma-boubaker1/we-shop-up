import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SpecialEventsComponent } from './shared/special-events/special-events.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../services/auth.guard/auth.guard';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductIndexComponent } from './product/product-index/product-index.component';

const routes: Routes = [




  // { path: 'productlist', component: ProductListComponent,
  //  children: [
  //   // {path: 'add', component: AddProductComponent},
  //   {path: 'edit', component: EditProductComponent}
  // ]},
  { path: 'login', component: LoginComponent },
  {path: 'details', component: ProductDetailsComponent},
  // { path: 'addProduct', component: AddProductComponent},
  { path: 'special-events', component: SpecialEventsComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'register', component: RegisterComponent },
  { path: 'product', component: ProductIndexComponent,
  children: [
   {path: 'list', component: ProductListComponent},
   {path: 'edit/:id', component: EditProductComponent},
   { path: 'add', component: AddProductComponent}
 ]},

 // otherwise redirect to home
  { path: '**', redirectTo: 'special-events'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
