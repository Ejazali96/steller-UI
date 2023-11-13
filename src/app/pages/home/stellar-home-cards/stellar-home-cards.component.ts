import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stellar-home-cards',
  templateUrl: './stellar-home-cards.component.html',
  styleUrls: ['./stellar-home-cards.component.css']
})
export class StellarHomeCardsComponent {
 @Input() isRight: boolean;
 @Input() stellarCardheading1: string;
 @Input() stellarCardheading2: string;
 @Input() stellarCardheadingIcon: string;
 @Input() stellarCarddescription: string;
 @Input() stellarCardbuttonText: string;
 @Input() stellarCardbuttonLink: string;
 @Input() stellarCardmainImage: string;
}
