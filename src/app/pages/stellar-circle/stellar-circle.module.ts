import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StellarCircleRoutingModule } from './stellar-circle-routing.module';
import { StellarCircleMainComponent } from './stellar-circle-main/stellar-circle-main.component';
import { StellarWipePhoneComponent } from './stellar-wipe-phone/stellar-wipe-phone.component';
import { StellarCircleFeaturesComponent } from './stellar-circle-features/stellar-circle-features.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StellarCircleMainComponent,
    StellarWipePhoneComponent,
    StellarCircleFeaturesComponent
  ],
  imports: [
    CommonModule,
    StellarCircleRoutingModule,
    SharedModule
  ]
})
export class StellarCircleModule { }
