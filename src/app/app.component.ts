import {AfterViewInit, Component, Renderer2} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslatorService } from './services/translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stellar-security';
  getTranslation:any
  constructor(private translate: TranslateService,private translator: TranslatorService) {
    if (typeof navigator !== 'undefined') {
      this.translator.loadTranslations('./assets/i18n/').subscribe(res=>{
        this.getTranslation = res
      })
    }
   
  }

}
