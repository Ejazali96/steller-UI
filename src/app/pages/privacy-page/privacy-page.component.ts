import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.css']
})
export class PrivacyPageComponent {
  metaDescription:string = 'Meta discription here for about';
  metaTitle:string = 'Srellar About';
  metaKeywords:string = 'Stellar about, stellar security, and so on';
}
