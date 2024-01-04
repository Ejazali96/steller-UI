import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WwwRedirectGuard } from './guard/www-redirect.guard';

const routes: Routes = [
  { path: '',canActivate: [WwwRedirectGuard], loadChildren: () => import('./Layouts/main/main.module').then(m => m.MainModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
