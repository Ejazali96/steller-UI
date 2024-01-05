import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private http: HttpClient,private translate: TranslateService) { }

  loadTranslations(data:any){
    let language = navigator.language;
    language = language.substring(0, 2);
    this.translate.addLangs(['en', 'de', 'da', 'se']);
    this.translate.setDefaultLang('en');
    
    this.translate.use(language);
    return this.http.get(`${data}${language}.json`).pipe(
      map((translations: any) => {
        this.translate.setTranslation(language, translations);
        return translations; // Return the loaded translations
      })
    );

  }

}
