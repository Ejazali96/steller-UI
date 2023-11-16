import { Component } from '@angular/core';

@Component({
  selector: 'app-stellar-notes-main',
  templateUrl: './stellar-notes-main.component.html',
  styleUrls: ['./stellar-notes-main.component.css']
})
export class StellarNotesMainComponent {
  metaDescription:string = 'The most secure and user-friendly notes app on the market. Your notes are encrypted and can only be accessed by you.';
  metaTitle:string = 'Stellar Security - Stellar Notes';
  metaKeywords:string = 'Stellar Notes, stellar security, and so on';
}
