import { Component } from '@angular/core';
import {v4 as uuidv4} from "uuid";
import {addCartDto} from "../../../constants/models/product";
import {ProductService} from "../../../services/product.service";
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-stellar-circle-main',
  templateUrl: './stellar-circle-main.component.html',
  styleUrls: ['./stellar-circle-main.component.css']
})
export class StellarCircleMainComponent {
  metaDescription:string = 'The most secure and user-friendly notes app on the market. Your notes are encrypted and can only be accessed by you.';
  metaTitle:string = 'Stellar Security - Stellar Circle';
  metaKeywords:string = 'Stellar Circle, stellar security, and so on';

  addingToCart = false;

  constructor(private productService:ProductService) {


  }

  onAddToCart(){

    this.addingToCart = true;

    let token_ids: any = localStorage.getItem("token_id");

    if(token_ids == null) {
      token_ids = uuidv4();
      localStorage.setItem('token_id', token_ids);
    } else{
      token_ids = localStorage.getItem('token_id');
    }

    let addToCartObj: addCartDto = {
      token_id: token_ids,
      user_id: 0,
      product_id: "b5de8b1b-3591-461d-aee2-30935655ef1d",
      quantity:1
    };

    this.productService.addToCart(addToCartObj).subscribe(
        (response) => {
          window.location.href = '/bag';
          console.log('API Response:', response);
        },
        (error) => {
          alert('Error, could not add the product to your cart.');
          console.error('API Error:', error);
        }
    );

  }

}
