import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from './../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { StellarHomeCardsComponent } from './stellar-home-cards/stellar-home-cards.component';
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [
    HomeComponent,
    StellarHomeCardsComponent
  ],
    imports: [
        CommonModule,
        TranslateModule.forChild(),
        HomeRoutingModule, SharedModule, AppModule
    ]
})
export class HomeModule { }
