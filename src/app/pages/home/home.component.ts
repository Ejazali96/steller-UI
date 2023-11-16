import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  metaDescription:string = 'Experience stellar security solutions that safeguard your digital assets. Our cutting-edge technology ensures protection against cyber threats. Explore peace of mind today!';
  metaTitle:string = 'Stellar Security - Because your privacy matters';
  metaKeywords:string = 'Stellar Home, stellar security, and so on';
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
