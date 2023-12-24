import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements AfterViewInit  {

  public loading = true;
  private token_id:any
  public bagsItems:any

  constructor(private productService:ProductService) {}

  public getBagItems() {
    this.token_id = localStorage.getItem('token_id');
    this.loading = true;
      this.productService.cartOverview(this.token_id).subscribe(x => {
        this.bagsItems = x;
        this.loading = false;
      })
  }

  ngAfterViewInit(): void {
    this.token_id = localStorage.getItem('token_id');
    this.getBagItems();
  }

}
