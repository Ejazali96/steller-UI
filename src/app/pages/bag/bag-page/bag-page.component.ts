import { Component } from '@angular/core';

@Component({
  selector: 'app-bag-page',
  templateUrl: './bag-page.component.html',
  styleUrls: ['./bag-page.component.css']
})
export class BagPageComponent {
  isBagHaveItems:boolean = false
  metaDescription:string = 'Activate bag';
  metaTitle:string = 'Stellar Security - bag';
  metaKeywords:string = 'Stellar bag, stellar security, and so on';

  showBagItems(){
    this.isBagHaveItems = true
  }
}
