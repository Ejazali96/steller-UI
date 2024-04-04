import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stellar-home-cards',
  templateUrl: './stellar-home-cards.component.html',
  styleUrls: ['./stellar-home-cards.component.css']
})
export class StellarHomeCardsComponent {
@Input() titleIcon: string;
@Input() cardTitle: string;
@Input() cardDescription: string;
@Input() cardImage: string;

}
