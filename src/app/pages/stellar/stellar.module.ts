import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StellarRoutingModule } from './stellar-routing.module';
import { StellarComponent } from './stellar.component';
import { SharedModule } from '../../../app/shared/shared.module';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    StellarComponent
  ],
    imports: [
        CommonModule,
        StellarRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class StellarModule { }
