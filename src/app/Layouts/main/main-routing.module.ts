import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { TermsPageComponent } from './../../pages/terms-page/terms-page.component';
import { PrivacyPageComponent } from './../../pages/privacy-page/privacy-page.component';
import { CheckoutPageComponent } from './../../pages/checkout-page/checkout-page.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';
import { ThankYouComponent } from 'src/app/pages/thank-you/thank-you.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    
    children:[
      { path: '', loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule) },
      { path: 'stellar-phone', loadChildren: () => import('../../pages/stellar/stellar.module').then(m => m.StellarModule) },
      { path: 'stellar-antivirus', loadChildren: () => import('../../pages/stellar-antivirus/stellar-antivirus.module').then(m => m.StellarAntivirusModule) },
      { path: 'stellar-esim', loadChildren: () => import('../../pages/stellar-esim/stellar-esim.module').then(m => m.StellarESimModule) },
      { path: 'stellar-protect', loadChildren: () => import('../../pages/stellar-security-app/stellar-security-app.module').then(m => m.StellarSecurityAppModule) },
      { path: 'stellar-notes', loadChildren: () => import('../../pages/stellar-notes/stellar-notes.module').then(m => m.StellarNotesModule) },
      { path: 'contact-us', loadChildren: () => import('../../pages/contact-us/contact-us.module').then(m => m.ContactUsModule) },
      { path: 'stellar-vpn', loadChildren: () => import('../../pages/stellar-vpn/stellar-vpn.module').then(m => m.StellarVPNModule) },
      { path: 'about-us', loadChildren: () => import('../../pages/about-us/about-us.module').then(m => m.AboutUsModule) },
      { path: 'activate-phone', loadChildren: () => import('../../pages/activate-phone/activate-phone.module').then(m => m.ActivatePhoneModule) },
      { path: 'stellar-store', loadChildren: () => import('../../pages/stellar-store/stellar-store.module').then(m => m.StellarStoreModule) },
      { path: 'checkout', loadChildren: () => import('../../pages/checkout/checkout.module').then(m => m.CheckoutModule) },
      { path: 'bag', loadChildren: () => import('../../pages/bag/bag.module').then(m => m.BagModule) },
      { path: 'physical-store', loadChildren: () => import('./../../pages/physical-store/physical-store.module').then(m => m.PhysicalStoreModule) },
      { path: 'terms-page', component:TermsPageComponent},
      { path: 'privacy-page', component:PrivacyPageComponent},
      { path: 'checkout-page', component:CheckoutPageComponent},
      {path: 'thank-you', component: ThankYouComponent},
      { path: 'stelleros', loadChildren: () => import('../../pages/stelleros/stelleros.module').then(m => m.StellerosModule) },
      {path: '**', component: NotFoundComponent}
    ]
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
