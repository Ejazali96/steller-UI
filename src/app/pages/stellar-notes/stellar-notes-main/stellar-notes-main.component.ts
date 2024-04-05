import { Component } from '@angular/core';
import {v4 as uuidv4} from "uuid";
import {addCartDto} from "../../../constants/models/product";
import {ProductService} from "../../../services/product.service";
import { OwlOptions } from "ngx-owl-carousel-o";
@Component({
  selector: 'app-stellar-notes-main',
  templateUrl: './stellar-notes-main.component.html',
  styleUrls: ['./stellar-notes-main.component.css']
})
export class StellarNotesMainComponent {

  showAppModal=false
  public addingToCart = false;

  constructor(private productService:ProductService) {


  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 32,
    center: true,
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
