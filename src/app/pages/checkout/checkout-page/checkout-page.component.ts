import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {
  constructor(private location: Location) { }
  goBack() {
    this.location.back();
  }
}
