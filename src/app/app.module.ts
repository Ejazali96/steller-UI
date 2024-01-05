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
import { TranslatorService } from './services/translator.service';
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
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
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
              },
        }),
        MainModule
    ],
    providers: [provideClientHydration(),TranslatorService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
