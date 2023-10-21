import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StellerosComponent } from './stelleros.component';

const routes: Routes = [{ path: '', component: StellerosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StellerosRoutingModule { }
