import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CarComponent } from './components/car/car.component';



import { BuyCarComponent } from './buy-car/buy-car.component';
import { SellCarComponent } from './sell-car/sell-car.component';
import { CarFinanceComponent } from './car-finance/car-finance.component';
import { NewCarComponent } from './new-car/new-car.component';
import { CarServiceComponent } from './car-service/car-service.component';
import { AccountComponent } from './account/account.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  { path: 'cars', component: CarComponent  },
  // { path: '', redirectTo: 'cars', pathMatch: 'full' },


  { path: 'buy-car', component: BuyCarComponent },
  { path: 'car-details/:id', component: CarDetailsComponent },
  { path: 'sell-car', component: SellCarComponent },
  { path: 'car-finance', component: CarFinanceComponent },
  { path: 'new-car', component: NewCarComponent },
  { path: 'car-service', component: CarServiceComponent },
  { path: 'account', component: AccountComponent },
  { path: '', redirectTo: '/buy-car', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
