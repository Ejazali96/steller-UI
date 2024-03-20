import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StellarSecurityAppRoutingModule } from './stellar-security-app-routing.module';
import { StellarSecurityComponent } from './stellar-security/stellar-security.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StellarPrivacyComponent } from './stellar-privacy/stellar-privacy.component';
import { StellarProtectDeviceComponent } from './stellar-protect-device/stellar-protect-device.component';
import { FirstClassSafetyComponent } from './first-class-safety/first-class-safety.component';
import { StellarTrackAccountComponent } from './stellar-track-account/stellar-track-account.component';
import { StellarSecuritySellerComponent } from './stellar-security-seller/stellar-security-seller.component';
import {LaddaModule} from "angular2-ladda";
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    StellarSecurityComponent,
    StellarPrivacyComponent,
    StellarProtectDeviceComponent,
    FirstClassSafetyComponent,
    StellarTrackAccountComponent,
    StellarSecuritySellerComponent
  ],
  imports: [
    CommonModule,
    StellarSecurityAppRoutingModule,
    SharedModule,
    LaddaModule,
    CarouselModule
  ]
})
export class StellarSecurityAppModule { }
