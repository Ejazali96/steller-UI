import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StellarAntivirusRoutingModule } from './stellar-antivirus-routing.module';
import { StellarAntivirusComponent } from './stellar-antivirus.component';
import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [
    StellarAntivirusComponent
  ],
  imports: [
    CommonModule,
    StellarAntivirusRoutingModule,
    SharedModule
  ]
})
export class StellarAntivirusModule { }
