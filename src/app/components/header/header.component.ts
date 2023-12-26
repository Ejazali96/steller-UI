import { Component, Renderer2, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isProductMenuOpen:boolean = false
  buttonType:string = ''

  public cartTotalProducts = 0;

  constructor(private activerouter:Router, private productService: ProductService) {
    console.log(this.activerouter.url);
    if(this.activerouter.url.includes('stellar-phone') || this.activerouter.url.includes('checkout'))
    {
      this.buttonType = 'buy'
    }else
    if(this.activerouter.url.includes('activate-phone'))
    {
      this.buttonType = 'privacy'
    }
  }


  private minicart() {
    this.productService.minicart(localStorage.getItem('token_id')).subscribe(x => {
      if(x.response_code == 200) {
        this.cartTotalProducts = x.total_products;
      }
    })
  }

  ngOnInit() {
    this.minicart();
  }

  ngAfterViewInit() {
   
  }
}
