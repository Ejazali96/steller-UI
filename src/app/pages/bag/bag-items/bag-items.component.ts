import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag-items',
  templateUrl: './bag-items.component.html',
  styleUrls: ['./bag-items.component.css']
})
export class BagItemsComponent implements OnInit {
@Input() productType:number


ngOnInit(): void {
  console.log('current item',this.productType)
}
}
