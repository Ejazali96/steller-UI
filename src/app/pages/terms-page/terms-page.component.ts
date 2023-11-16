import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-page',
  templateUrl: './terms-page.component.html',
  styleUrls: ['./terms-page.component.css']
})
export class TermsPageComponent {
  metaDescription:string = 'Read our terms & conditions at Stellar Security';
  metaTitle:string = 'Stellar Security - terms & conditions';
  metaKeywords:string = 'Stellar Term, stellar security, and so on';
}
