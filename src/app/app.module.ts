import { NgModule } from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './Layouts/main/main.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { LaddaModule } from 'angular2-ladda';
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        LaddaModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        MainModule
    ],
    providers: [provideClientHydration() ],
    bootstrap: [AppComponent]
})
export class AppModule { }
