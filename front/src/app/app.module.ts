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
import { HomeService } from '../services/home/home.service';
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
import { CartTagComponent } from './cart-tag/cart-tag.component';
import { CartTagListComponent } from './shared/cart-tag-list/cart-tag-list.component';

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
    CartTagListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, HomeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
