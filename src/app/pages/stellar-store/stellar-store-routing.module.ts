import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StellarStoreComponent } from './stellar-store/stellar-store.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: StellarStoreComponent },
  {
    path:"product/:id",
    component:ProductsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StellarStoreRoutingModule { }
