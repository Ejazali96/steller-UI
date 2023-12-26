import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhysicalStoreComponent } from './physical-store/physical-store.component';

const routes: Routes = [
  {
    path:"",
    component:PhysicalStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysicalStoreRoutingModule { }
