import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WwwRedirectGuard } from './guard/www-redirect.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Layouts/main/main.module').then(m => m.MainModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
