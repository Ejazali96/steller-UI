import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product, ProductDto, addCartDto } from 'src/app/constants/models/product';
import { ProductService } from 'src/app/services/product.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product:ProductDto;
  addToCartObj:addCartDto;
  productId:any;
  token_id:any;

  public loading : boolean;

  public addingToCartLoading = false;

  public productPreview = "";

  constructor(private productService:ProductService, private route:ActivatedRoute) {


  }
  async ngOnInit() {

    this.token_id = localStorage.getItem("token_id");
    await this.loadComponentData()
  }

  async loadComponentData(){
    this.productId = this.route.snapshot.paramMap.get('id');
    this.loading = true;
    if (this.productId !== null) {
      this.productService.getProductById(this.productId).subscribe(x => {

        if(x.product.redirect_to !== null) {
          window.location.href = x.product.redirect_to;
        } else {
          this.product = x.product;
          this.productPreview = this.product.images[0].image;
          this.loading = false;
        }

      })
  }
  }

  onAddToCart(){

    if(!this.token_id) {
      this.generateUUID()
    } else{
      this.token_id= localStorage.getItem('token_id')
    }

    this.addToCartObj = {
      token_id:this.token_id,
      user_id: 0,
      product_id:this.product.id,
      quantity:1
    };

    this.addingToCartLoading = true;

    this.productService.addToCart(this.addToCartObj).subscribe(
      (response) => {
        window.location.href = '/bag';
        this.addingToCartLoading = false;
        console.log('API Response:', response);
      },
      (error) => {
        this.addingToCartLoading = false;

        alert('Error, could not add the product to your cart.');
        console.error('API Error:', error);
      }
    );

  }

  generateUUID() {
    // Generate a new UUID
    const tokenId = uuidv4();
    localStorage.setItem('token_id', tokenId);
    this.token_id = tokenId
  }


  viewThis(src:string){
    this.productPreview = src
  }

}
