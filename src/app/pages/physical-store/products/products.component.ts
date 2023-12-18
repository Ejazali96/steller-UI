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
product:ProductDto
addToCartObj:addCartDto
productId:any
token_id:any

constructor(private productService:ProductService, private route:ActivatedRoute) {

  
}
async ngOnInit() {
 
  await this.loadComponentData()
}

async loadComponentData(){
  this.productId = this.route.snapshot.paramMap.get('id');
  if (this.productId !== null) {
    this.productService.getProductById(this.productId).subscribe(x => {
      this.product = x.product
      console.log(this.product);
    })
}
}

onAddToCart(){
  if(!this.token_id){
    this.generateUUID()
  }
  else{
    this.token_id= localStorage.getItem('token_id')
  }
  this.addToCartObj = {
    token_id:this.token_id,
    user_id: 0,
    product_id:this.product.id,
    quantity:2
  };


  this.productService.addToCart(this.addToCartObj).subscribe(
    (response) => {
      console.log('API Response:', response);
    },
    (error) => {
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

  productImages:string[] =[
    "image1.svg",
    "image2.svg",
    "image3.svg",
    "image4.svg",
    "image5.svg",
  ]
  
  productPreview:string = this.productImages[0]
  viewThis(src:string){
    this.productPreview = src
  }
}
