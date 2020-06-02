import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SpecialEventsComponent } from './shared/special-events/special-events.component';
import { AuthGuard } from '../services/auth.guard/auth.guard';
import { AuthService } from '../services/auth/auth.service';
import { TokenInterceptorService } from '../services/token-interceptor/token-interceptor.service';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SlideComponent } from './shared/slide/slide.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BodyComponent } from './body/body.component';
import { CartTagComponent } from './shared/cart-tag/cart-tag.component';
import { CartTagListComponent } from './shared/cart-tag-list/cart-tag-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LogoutGuard } from 'src/services/LogoutGuard/logout.guard';
import { AddToCartComponent } from './shared/add-to-cart/add-to-cart.component';
import { AddProductComponent } from './product/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SpecialEventsComponent,
    HomeComponent,
    NavBarComponent,
    SlideComponent,
    ProductListComponent,
    FooterComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    BodyComponent,
    CartTagComponent,
    CartTagListComponent,
    CheckoutComponent,
    AddToCartComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, LogoutGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
