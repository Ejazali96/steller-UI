import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from './../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { StellarHomeCardsComponent } from './stellar-home-cards/stellar-home-cards.component';
import {AppModule} from "../../app.module";
import { StellarMoreProductsComponent } from './stellar-more-products/stellar-more-products.component';


@NgModule({
  declarations: [
    HomeComponent,
    StellarHomeCardsComponent,
    StellarMoreProductsComponent
  ],
    imports: [
        CommonModule,
        TranslateModule.forChild(),
        HomeRoutingModule, SharedModule
    ]
})
export class HomeModule { }
