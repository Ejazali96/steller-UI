import { Component } from '@angular/core';
import {CheckedoutService} from "../../../services/checkedout.service";
import {Order} from "../../../constants/models/order";

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent {
  isChecked: boolean = true;
  isItemOpen = [false, false, false];

  public creatingOrder = false;

  constructor(private checkoutService:CheckedoutService) {

  }

  onCheckboxChange() {
    this.isChecked = !this.isChecked;
  }
  showItemInfo(which: number){
    this.isItemOpen[0] = false;
    this.isItemOpen[1] = false;
    this.isItemOpen[2] = false;

    this.isItemOpen[which] = !this.isItemOpen[which];
  }

  public createOrder() {
    this.creatingOrder = true;

    let order = new Order();
    order.payment_address = localStorage.getItem("payment_address");
    order.payment_firstname = localStorage.getItem("payment_firstname");
    order.payment_lastname = localStorage.getItem("payment_lastname");
    order.order_status_id = 2;
    order.token_id = localStorage.getItem("token_id");
    order.payment_city = localStorage.getItem("payment_city");
    order.payment_postcode = localStorage.getItem("payment_postcode");
    order.payment_country = localStorage.getItem("payment_postcode");
    order.payment_state = localStorage.getItem("payment_postcode");
    order.payment_email = localStorage.getItem("payment_email");
    order.payment_phone = localStorage.getItem("payment_phone");
    order.order_type = 0;
    order.anonymously_contact_type = localStorage.getItem("anonymously_contact_type");
    order.anonymously_contact_info = localStorage.getItem("anonymously_contact_info");
    order.payment_type = 5;

    this.checkoutService.createOrder(order).subscribe({
      next:e => {
        this.creatingOrder = false;
        if(e.response_code === 451) {
          alert("The order could not be created. Please ensure all info is filled out.");
        }

        if(e.response_code === 200) {
          window.location.href = e.payment.redirect_url;
        }

      },
      error:e => { this.creatingOrder = false;  }
    })
  }

}
