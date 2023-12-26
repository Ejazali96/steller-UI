import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysicalStoreRoutingModule } from './physical-store-routing.module';
import { PhysicalStoreComponent } from './physical-store/physical-store.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PhysicalStoreComponent
  ],
  imports: [
    CommonModule,
    PhysicalStoreRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PhysicalStoreModule { }
