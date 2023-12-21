import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CheckedoutService } from 'src/app/services/checkedout.service';

@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.component.html',
  styleUrls: ['./shipping-method.component.css']
})
export class ShippingMethodComponent implements OnInit {
deliveryData:any
  constructor(private checkService: CheckedoutService) {

  }
  ngOnInit(): void {
    
  }
  @ViewChild('zipCodeInput', { static: false }) zipCodeInput!: NgModel;

  zipCode: string = '';
  isZipcodeValid: boolean = false
  checkFormValidity(zipForm: any) {
 
  }
  showStockDetail() {
    let token =  localStorage.getItem('token_id') || ''
    this.isZipcodeValid = true
    if (this.isZipcodeValid) {      
      this.checkService.delivered(token, this.zipCodeInput).subscribe({
        next: e => {
          this.deliveryData = e
          console.log('test',e)},
        error: e => console.log('ddddd' + e)
      })
    }
  }
}
