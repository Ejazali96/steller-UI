import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StellarStoreComponent } from './stellar-store/stellar-store.component';

const routes: Routes = [{ path: '', component: StellarStoreComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StellarStoreRoutingModule { }
