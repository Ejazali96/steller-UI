import { Component } from '@angular/core';
import {v4 as uuidv4} from "uuid";
import {addCartDto} from "../../../constants/models/product";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-stellar-notes-main',
  templateUrl: './stellar-notes-main.component.html',
  styleUrls: ['./stellar-notes-main.component.css']
})
export class StellarNotesMainComponent {
  metaDescription:string = 'The most secure and user-friendly notes app on the market. Your notes are encrypted and can only be accessed by you.';
  metaTitle:string = 'Stellar Security - Stellar Notes';
  metaKeywords:string = 'Stellar Notes, stellar security, and so on';

  public addingToCart = false;

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
      product_id: "f46643c7-980e-4883-879f-2f007efaa257",
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
