import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysicalStoreRoutingModule } from './physical-store-routing.module';
import { PhysicalStoreComponent } from './physical-store/physical-store.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import {LaddaModule} from "angular2-ladda";


@NgModule({
  declarations: [
    PhysicalStoreComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    PhysicalStoreRoutingModule,
    FormsModule,
    LaddaModule
  ]
})
export class PhysicalStoreModule { }
