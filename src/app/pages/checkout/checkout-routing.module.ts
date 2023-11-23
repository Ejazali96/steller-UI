import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingMethodComponent } from './shipping-method/shipping-method.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'shipping-method'},
  {
    path: '',
    component: CheckoutPageComponent,
    children: [
      {path: 'shipping-method', component: ShippingMethodComponent},
      {path: 'shipping-detail', component: ShippingDetailComponent},
      {path: 'payment-method', component: PaymentMethodComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
