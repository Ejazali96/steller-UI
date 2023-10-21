import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StellarVPNComponent } from './stellar-vpn.component';

const routes: Routes = [{ path: '', component: StellarVPNComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StellarVPNRoutingModule { }
