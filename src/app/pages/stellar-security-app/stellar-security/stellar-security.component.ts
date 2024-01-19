import { Component } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {v4 as uuidv4} from "uuid";
import {addCartDto} from "../../../constants/models/product";

@Component({
  selector: 'app-stellar-security',
  templateUrl: './stellar-security.component.html',
  styleUrls: ['./stellar-security.component.css']
})
export class StellarSecurityComponent {
  metaDescription:string = 'Stellar Protect is the most advanced security app that protects your device in a way no other can do.';
  metaTitle:string = 'Stellar Protect - Stellar Security';
  metaKeywords:string = 'Stellar Protect, protect, stellar security, and so on';

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
      product_id: "64d61e1c-4aa7-4683-a65e-0c1616d601b9",
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
