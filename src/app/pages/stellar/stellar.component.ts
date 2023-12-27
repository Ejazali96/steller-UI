import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {v4 as uuidv4} from "uuid";
import {addCartDto} from "../../constants/models/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-stellar',
  templateUrl: './stellar.component.html',
  styleUrls: ['./stellar.component.css']
})
export class StellarComponent implements OnInit {
  metaDescription:string = 'Stellar Phone: Cutting-edge tech, sleek design. Experience power, stunning display, and advanced security in one. Redefine innovation on the go';
  metaTitle:string = 'Stellar Security - Stellar Phone';
  metaKeywords:string = 'Stellar Security, secure phone, stellar phone';
  public chosen_phone_subscription = 6;

  public product_id = "1083fd58-80a4-4ad1-af00-a78547ef82c1";

  public product_variant: any = "9bb4954a-e8a7-4b74-8475-a91e4f0ed792";

  public product : any = null;

  public addingToCart = false;



  constructor(private productService:ProductService,private route: ActivatedRoute) { }


  async ngOnInit() {
    const product_id = this.route.snapshot.queryParamMap.get('product_id');
    if(product_id !== null) {
      this.product_id = product_id;
    }
    await this.getProduct();
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
      product_variant_id: this.product_variant,
      product_id: this.product_id,
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

  public async getProduct() {
      this.product = null;
      this.productService.getProductById(this.product_id, this.product_variant).subscribe(x => {

          console.log(x);
          x.product.formatted_price = x.product.variants[1].formatted_price;
          this.product_variant = x.product.variants[1].id;

          if(this.chosen_phone_subscription == 3) {
            x.product.formatted_price = x.product.variants[0].formatted_price;
            this.product_variant = x.product.variants[0].id;
          }

          this.product = x.product;
      })
  }

  public setChoseSubscription(subscription: number) {
    this.product_variant = this.product.variants[1].id;
    if(subscription == 3) {
      this.product_variant = this.product.variants[0].id;
    }

    this.chosen_phone_subscription = subscription;
    this.getProduct();
  }

}
