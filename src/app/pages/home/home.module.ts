import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from './../../shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { StellarHomeCardsComponent } from './stellar-home-cards/stellar-home-cards.component';
import {AppModule} from "../../app.module";
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    HomeComponent,
    StellarHomeCardsComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule, SharedModule
    ]
})
export class HomeModule { }
