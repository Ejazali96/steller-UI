import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product, ProductDto } from 'src/app/constants/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
product:ProductDto
productId:any


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

  fetchSingleProduct(id:number){
 
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
