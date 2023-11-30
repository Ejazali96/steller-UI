import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BagRoutingModule } from './bag-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BagPageComponent } from './bag-page/bag-page.component';
import { BagItemsComponent } from './bag-items/bag-items.component';


@NgModule({
  declarations: [
    BagPageComponent,
    BagItemsComponent
  ],
  imports: [
    CommonModule,
    BagRoutingModule,
    SharedModule
  ]
})
export class BagModule { }
