import { Component } from "@angular/core";
import { ProductService } from "../../../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { v4 as uuidv4 } from "uuid";
import { addCartDto } from "../../../constants/models/product";
import { OwlOptions } from "ngx-owl-carousel-o";
@Component({
  selector: "app-stellar-security",
  templateUrl: "./stellar-security.component.html",
  styleUrls: ["./stellar-security.component.css"],
})
export class StellarSecurityComponent {
  metaDescription: string =
    "Stellar Protect is the most advanced security app that protects your device in a way no other can do. Get Stellar Protect now.";
  metaTitle: string = "Stellar Protect";
  metaKeywords: string =
    "Stellar Protect, protect, stellar security, and so on";
  usersSaved: number = 0;
  purchases: number = 0;
  screensProtected: number = 0;
  public addingToCart = false;

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.startCounters();
  }
  // For Counter///
  startCounters() {
    const usersSavedLimit = 1300;
    const purchasesLimit = 15;
    const screensProtectedLimit = 500;

    const usersSavedInterval = setInterval(() => {
      this.usersSaved++;
      if (this.usersSaved >= usersSavedLimit) {
        clearInterval(usersSavedInterval);
      }
    }, 5);

    const purchasesInterval = setInterval(() => {
      this.purchases++;
      if (this.purchases >= purchasesLimit) {
        clearInterval(purchasesInterval);
      }
    }, 100);

    const screensProtectedInterval = setInterval(() => {
      this.screensProtected++;
      if (this.screensProtected >= screensProtectedLimit) {
        clearInterval(screensProtectedInterval);
      }
    }, 5);
  }
  // Counter end////
  onAddToCart() {
    this.addingToCart = true;

    let token_ids: any = localStorage.getItem("token_id");

    if (token_ids == null) {
      token_ids = uuidv4();
      localStorage.setItem("token_id", token_ids);
    } else {
      token_ids = localStorage.getItem("token_id");
    }

    let addToCartObj: addCartDto = {
      token_id: token_ids,
      user_id: 0,
      product_id: "64d61e1c-4aa7-4683-a65e-0c1616d601b9",
      quantity: 1,
    };

    this.productService.addToCart(addToCartObj).subscribe(
      (response) => {
        window.location.href = "/bag";
        console.log("API Response:", response);
      },
      (error) => {
        alert("Error, could not add the product to your cart.");
        console.error("API Error:", error);
      }
    );
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 10,
    autoWidth: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
