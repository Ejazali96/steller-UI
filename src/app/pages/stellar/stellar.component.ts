import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";

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


  constructor(private productservice: ProductService) { }


  async ngOnInit() {
    setTimeout(async () => {
      await this.getProduct();
    }, 1000);
  }

  public async getProduct() {
      this.product = null;
      this.productservice.getProductById(this.product_id, this.product_variant).subscribe(x => {

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
