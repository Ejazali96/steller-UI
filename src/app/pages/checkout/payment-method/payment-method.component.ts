import { Component } from '@angular/core';
import {CheckedoutService} from "../../../services/checkedout.service";

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent {
  isChecked: boolean = true;
  isItemOpen = [false, false, false];

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
    this.checkoutService.createOrder([]).subscribe({
      next:e => {
        if(e.response_code === 451) {
          alert("The order could not be created. Please ensure all info is filled out.");
        }
      },
      error:e => console.log(e)
    })
  }

}
