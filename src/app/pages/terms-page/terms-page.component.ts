import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-page',
  templateUrl: './terms-page.component.html',
  styleUrls: ['./terms-page.component.css']
})
export class TermsPageComponent {
  metaDescription:string = 'Meta discription here for Term';
  metaTitle:string = 'Srellar Term';
  metaKeywords:string = 'Stellar Term, stellar security, and so on';
}
