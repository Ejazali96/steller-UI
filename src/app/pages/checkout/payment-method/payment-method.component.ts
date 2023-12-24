import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent {
  isChecked: boolean = true;
  isItemOpen = [false, false, false];

  onCheckboxChange() {
    this.isChecked = !this.isChecked;
  }
  showItemInfo(which: number){
    this.isItemOpen[0] = false;
    this.isItemOpen[1] = false;
    this.isItemOpen[2] = false;

    this.isItemOpen[which] = !this.isItemOpen[which];
  }
}
