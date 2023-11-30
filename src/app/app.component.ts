import {AfterViewInit, Component, Renderer2} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stellar-security';
  constructor(private translate: TranslateService) {

    let language = navigator.language;
    language = language.substr(0, 2);

    this.translate.addLangs(['en', 'de', 'da', 'se']);
    this.translate.use(language);
  }

}
