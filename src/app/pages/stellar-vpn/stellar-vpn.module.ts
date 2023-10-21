import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StellarVPNRoutingModule } from './stellar-vpn-routing.module';
import { StellarVPNComponent } from './stellar-vpn.component';
import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [
    StellarVPNComponent
  ],
  imports: [
    CommonModule,
    StellarVPNRoutingModule,
    SharedModule
  ]
})
export class StellarVPNModule { }
