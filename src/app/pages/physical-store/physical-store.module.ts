import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysicalStoreRoutingModule } from './physical-store-routing.module';
import { PhysicalStoreComponent } from './physical-store/physical-store.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    PhysicalStoreComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    PhysicalStoreRoutingModule,
    FormsModule,
  ]
})
export class PhysicalStoreModule { }
