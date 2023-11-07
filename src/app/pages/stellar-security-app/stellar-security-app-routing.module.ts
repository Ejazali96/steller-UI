import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StellarSecurityComponent } from './stellar-security/stellar-security.component';

const routes: Routes = [{ path: '', component: StellarSecurityComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StellarSecurityAppRoutingModule { }
