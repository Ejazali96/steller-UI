import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ShippingMethodComponent } from './shipping-method/shipping-method.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { ThankYouComponent } from '../thank-you/thank-you.component';
import { FindStoreComponent } from './find-store/find-store.component';
import { PickupDetailComponent } from './pickup-detail/pickup-detail.component';


@NgModule({
  declarations: [
    CheckoutPageComponent,
    ShippingMethodComponent,
    ShippingDetailComponent,
    OrderSummaryComponent,
    PaymentMethodComponent,
    ThankYouComponent,
    FindStoreComponent,
    PickupDetailComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CheckoutModule { }
