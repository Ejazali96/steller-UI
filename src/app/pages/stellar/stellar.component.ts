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

  public product_variant: any;

  public product : any = null;


  constructor(private productservice: ProductService) { }


  async ngOnInit() {
    setTimeout(async () => {
      await this.getProduct();
    }, 1000);
  }

  public async getProduct() {
      this.product = null;
      this.productservice.getProductById(this.product_id).subscribe(x => {
          this.product = x.product;
      })
  }

  public setChoseSubscription(subscription: number) {
    this.chosen_phone_subscription = subscription;
  }

}
