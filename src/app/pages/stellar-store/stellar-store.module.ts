import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StellarStoreRoutingModule } from './stellar-store-routing.module';
import { StellarStoreComponent } from './stellar-store/stellar-store.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { LaddaModule } from 'angular2-ladda';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StellarStoreComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    StellarStoreRoutingModule,
    SharedModule,
    FormsModule,
    LaddaModule
  ]
})
export class StellarStoreModule { }
