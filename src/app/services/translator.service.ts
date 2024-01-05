import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
    return this.http.get(`${data}${language}.json`).pipe(
      map((translations: any) => {

        this.translate.setDefaultLang('se');
      this.translate.setTranslation(language, translations);
      this.translate.use(language);
        return translations; // Return the loaded translations
      })
    );

  }

}
