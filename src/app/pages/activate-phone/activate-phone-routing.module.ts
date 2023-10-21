import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatePhoneComponent } from './activate-phone.component';

const routes: Routes = [{ path: '', component: ActivatePhoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivatePhoneRoutingModule { }
