import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/constants/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-stellar-store',
  templateUrl: './stellar-store.component.html',
  styleUrls: ['./stellar-store.component.css']
})
export class StellarStoreComponent implements OnInit {
  products: Product[] = []
  fullshow: boolean = true;
  hideFilter: boolean = false
  public loading = true;
  constructor(private productservice: ProductService) {

  }

  ngOnInit(): void {
    this.productservice.getAllProduct().subscribe(x => {
      this.products = x.products
    })
  }

  category: any = [
    {
      name: "All",
      count: 14
    },
    {
      name: "Sim cards",
      count: 4
    },
    {
      name: "Accessories",
      count: 6
    },
    {
      name: "Phone",
      count: 2
    },
    {
      name: "Privacy screens",
      count: 2
    },
    {
      name: "Services",
      count: 2
    },
  ]

  showfilter() {
    this.hideFilter = !this.hideFilter
  }

}
