import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  metaDescription:string = 'Meta discription here for about';
  metaTitle:string = 'Srellar About';
  metaKeywords:string = 'Stellar about, stellar security, and so on';
}
