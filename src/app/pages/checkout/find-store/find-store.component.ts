import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CheckedoutService } from 'src/app/services/checkedout.service';

@Component({
  selector: 'app-find-store',
  templateUrl: './find-store.component.html',
  styleUrls: ['./find-store.component.css']
})
export class FindStoreComponent {
  constructor(private checkoutService:CheckedoutService) {
    
  }
  @ViewChild('zipCodeInput', { static: false }) zipCodeInput!: NgModel;
  zipCode: string = '';
  pickupData:any = '';
  isZipcodeValid:boolean = false
  checkFormValidity(zipForm:any) {
    console.log('Is the form valid?', zipForm.form.valid);
    // this.isZipcodeValid = !!(zipForm.form.invalid || zipForm.form.dirty);
  }
  showStockDetail(){
    let token = localStorage.getItem('token_id') || ''
    this.isZipcodeValid = true
    this.checkoutService.pickup(token,this.zipCodeInput).subscribe({
      next:e => {
        this.pickupData = e
        console.log(e);
        
      },
      error:e => console.log(e)
    })

  }
}
