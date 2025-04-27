import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './components/car/car.component';
import { BuyCarComponent } from './buy-car/buy-car.component';
import { SellCarComponent } from './sell-car/sell-car.component';
import { CarFinanceComponent } from './car-finance/car-finance.component';
import { NewCarComponent } from './new-car/new-car.component';
import { CarServiceComponent } from './car-service/car-service.component';
import { AccountComponent } from './account/account.component';
import { LocationBarComponent } from './location-bar/location-bar.component';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CarComponent,
    BuyCarComponent,
    SellCarComponent,
    CarFinanceComponent,
    NewCarComponent,
    CarServiceComponent,
    AccountComponent,
    LocationBarComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
