import { Component } from '@angular/core';

@Component({
  selector: 'app-stellar-notes-main',
  templateUrl: './stellar-notes-main.component.html',
  styleUrls: ['./stellar-notes-main.component.css']
})
export class StellarNotesMainComponent {
  metaDescription:string = 'Meta discription here for notes';
  metaTitle:string = 'Srellar Notes';
  metaKeywords:string = 'Stellar Notes, stellar security, and so on';
}
