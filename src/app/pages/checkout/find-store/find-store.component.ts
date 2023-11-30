import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-find-store',
  templateUrl: './find-store.component.html',
  styleUrls: ['./find-store.component.css']
})
export class FindStoreComponent {
  @ViewChild('zipCodeInput', { static: false }) zipCodeInput!: NgModel;
  zipCode: string = '';
  isZipcodeValid:boolean = false
  checkFormValidity(zipForm:any) {
    console.log('Is the form valid?', zipForm.form.valid);
    // this.isZipcodeValid = !!(zipForm.form.invalid || zipForm.form.dirty);
  }
  showStockDetail(){
    this.isZipcodeValid = true
  }
}
