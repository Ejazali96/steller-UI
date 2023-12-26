import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pickup-detail',
  templateUrl: './pickup-detail.component.html',
  styleUrls: ['./pickup-detail.component.css']
})
export class PickupDetailComponent {
  isElsePicker:number = 1;

  public error = false;

  public payment_firstname: string = '';
  public payment_lastname: string = '';
  public payment_email: string = '';
  public payment_phone: string = '';

  public anonymously_contact_type: string = '';
  public anonymously_contact_info: string = '';

  private keys =
    [
      "payment_firstname",
      "payment_lastname",
      "payment_email",
      "payment_phone",
      "anonymously_contact_type",
      "anonymously_contact_info"
  ];

  constructor(private _router: Router) {
  }

  public gotoPayment() {

    localStorage.setItem("payment_firstname", this.payment_firstname);
    localStorage.setItem("payment_lastname", this.payment_lastname);
    localStorage.setItem("payment_email", this.payment_email);
    localStorage.setItem("payment_phone", this.payment_phone);
    localStorage.setItem("anonymously_contact_type", this.anonymously_contact_type);
    localStorage.setItem("anonymously_contact_info", this.anonymously_contact_info);

    if(this.isElsePicker !== 3) {

    }

    this._router.navigate(['/checkout/payment-method']);

  }

  public picker(isElsePicker: number) {
    this.isElsePicker = isElsePicker;

    if(this.isElsePicker == 3) {
      this.anonymously_contact_type = "Signal";
    }

    localStorage.setItem("order_type", this.isElsePicker.toString());

  }

}
