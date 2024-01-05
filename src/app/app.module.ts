import { NgModule } from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './Layouts/main/main.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { LaddaModule } from 'angular2-ladda';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        LaddaModule,
        TranslateModule.forRoot(),
        MainModule
    ],
    providers: [provideClientHydration() ],
    bootstrap: [AppComponent]
})
export class AppModule { }
