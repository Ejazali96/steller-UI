import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StellerosRoutingModule } from './stelleros-routing.module';
import { StellerosComponent } from './stelleros.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StellerosComponent
  ],
  imports: [
    CommonModule,
    StellerosRoutingModule,
    SharedModule
  ]
})
export class StellerosModule { }
