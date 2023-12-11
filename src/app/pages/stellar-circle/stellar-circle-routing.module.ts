import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StellarCircleMainComponent } from './stellar-circle-main/stellar-circle-main.component';

const routes: Routes = [{ path: '', component: StellarCircleMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StellarCircleRoutingModule { }
