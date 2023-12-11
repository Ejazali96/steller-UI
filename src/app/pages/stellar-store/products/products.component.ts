import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Product } from 'src/app/constants/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
product:Product
productId:any
products:Product[]

constructor(private productService:ProductService, private route:ActivatedRoute) {

  
}
ngOnInit(): void {
  this.route.paramMap.subscribe({
    next: (param) => {
      this.productId = param.get("id")
        if (this.productId != null) {
          this.productService.getAllProduct().subscribe(x => {
            this.products = x.products
            this.product = this.products.filter(x=> x.id == parseInt(this.productId))[0]
            console.log(this.product);
            this.productPreview = this.product.thumbnail
          })
      }
    }
  })

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