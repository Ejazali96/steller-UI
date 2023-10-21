import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StellarAntivirusComponent } from './stellar-antivirus.component';

const routes: Routes = [{ path: '', component: StellarAntivirusComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StellarAntivirusRoutingModule { }
