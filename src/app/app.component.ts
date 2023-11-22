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

    language = "da";

    this.translate.addLangs(['en', 'de', 'da']);
    this.translate.use(language);
  }

}
