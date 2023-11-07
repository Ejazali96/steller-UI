import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StellarNotesMainComponent } from './stellar-notes-main/stellar-notes-main.component';

const routes: Routes = [{ path: '', component: StellarNotesMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StellarNotesRoutingModule { }
