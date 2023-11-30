import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent {
  isChecked: boolean = true;
  isItemOpen:boolean = false
  onCheckboxChange() {
    this.isChecked = !this.isChecked;
  }
  showItemInfo(){
    this.isItemOpen = !this.isItemOpen
  }
}
