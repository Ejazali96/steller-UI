import { Component } from '@angular/core';

@Component({
  selector: 'app-stellar',
  templateUrl: './stellar.component.html',
  styleUrls: ['./stellar.component.css']
})
export class StellarComponent {

  public chosen_phone_subscription = 6;

  public phone_price = "999,99";

  public setChoseSubscription(subscription: number) {
    this.chosen_phone_subscription = subscription;
  }

}
