import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor(private meta: Meta) {
  }
  ngOnInit(){
    // this.meta.addTag({ name: 'description', content: 'This is the description for the page.' });
    // this.meta.addTag({ property: 'og:title', content: 'My Page Title' });
    // this.meta.addTag({ property: 'keywords', content: 'stellar Home, antivirus, security, protection, vpn' });
  }

  ngOnDestroy() {

    
  }
}
