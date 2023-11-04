import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StellarEsimComponent } from './stellar-esim.component';

const routes: Routes = [{ path: '', component: StellarEsimComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StellarESimRoutingModule { }