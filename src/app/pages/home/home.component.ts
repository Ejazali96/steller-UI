import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { TranslatorService } from 'src/app/services/translator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  getTranslation:any
  metaDescription:string = 'Experience stellar security solutions that safeguard your digital assets. Our cutting-edge technology ensures protection against cyber threats. Explore peace of mind today!';
  metaTitle:string = 'Stellar Security - Because your privacy matters';
  metaKeywords:string = 'Stellar Home, stellar security, and so on';
  constructor(private translator: TranslatorService,private translate: TranslateService) {
    if (typeof navigator !== 'undefined') {
      this.translator.loadTranslations('./assets/i18n/').subscribe(res=>{
        this.getTranslation = res
      })
 
    }
   
  }
  ngOnInit(){
    
  
  }

  ngOnDestroy() {

    
  }
}
