import { Component, OnInit } from '@angular/core';
import { bagsItemDto } from 'src/app/constants/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-bag-page',
  templateUrl: './bag-page.component.html',
  styleUrls: ['./bag-page.component.css']
})
export class BagPageComponent implements OnInit {
  isBagHaveItems:boolean = false
  metaDescription:string = 'Activate bag';
  metaTitle:string = 'Stellar Security - bag';
  metaKeywords:string = 'Stellar bag, stellar security, and so on';
  token_id:any
  bagsItems:any
  loading: boolean;
  constructor(private productService:ProductService) {

  
  }
ngOnInit() {
this.token_id = localStorage.getItem('token_id');
this.loading = true;
  if (this.token_id !== null) {
    this.productService.cartOverview(this.token_id).subscribe(x => {
      
      this.bagsItems = x;
      this.loading = false;
      console.log('bag items',this.bagsItems)
      this.isBagHaveItems = true
    })
}
}
  showBagItems(){
    this.isBagHaveItems = true
  }
}
