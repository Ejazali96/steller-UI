import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StellarRoutingModule } from './stellar-routing.module';
import { StellarComponent } from './stellar.component';
import { SharedModule } from '../../../app/shared/shared.module';
import {FormsModule} from "@angular/forms";
import {LaddaModule} from "angular2-ladda";


@NgModule({
  declarations: [
    StellarComponent
  ],
    imports: [
        CommonModule,
        StellarRoutingModule,
        SharedModule,
        FormsModule,
        LaddaModule
    ]
})
export class StellarModule { }
