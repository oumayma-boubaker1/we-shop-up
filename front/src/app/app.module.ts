import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
//
import { AuthGuard } from './auth.guard';
import { HomeService } from './home.service';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SlideComponent } from './home/slide/slide.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './home/product-list/product/product.component';
import { ProductDetailsComponent } from './home/product-list/product-details/product-details.component';

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
    ProductComponent,
    ProductDetailsComponent
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
