import { Component } from '@angular/core';

@Component({
  selector: 'app-stellar',
  templateUrl: './stellar.component.html',
  styleUrls: ['./stellar.component.css']
})
export class StellarComponent {
  metaDescription:string = 'Stellar Phone: Cutting-edge tech, sleek design. Experience power, stunning display, and advanced security in one. Redefine innovation on the go';
  metaTitle:string = 'StellarSecurity - Stellar Phone';
  metaKeywords:string = 'Stellar Security, secure phone, stellar phone';
  public chosen_phone_subscription = 6;

  public phone_price = "999,99";

  public setChoseSubscription(subscription: number) {
    this.chosen_phone_subscription = subscription;
  }

}
