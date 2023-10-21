import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatePhoneRoutingModule } from './activate-phone-routing.module';
import { ActivatePhoneComponent } from './activate-phone.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ActivatePhoneComponent
  ],
  imports: [
    CommonModule,
    ActivatePhoneRoutingModule,
    SharedModule
  ]
})
export class ActivatePhoneModule { }
