import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StellarComponent } from './stellar.component';

const routes: Routes = [{ path: '', component: StellarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StellarRoutingModule { }
