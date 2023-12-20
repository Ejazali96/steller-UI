import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';
import { Product, ProductDto, categoryDto } from 'src/app/constants/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-physical-store',
  templateUrl: './physical-store.component.html',
  styleUrls: ['./physical-store.component.css']
})
export class PhysicalStoreComponent implements AfterViewInit {
  allProducts: ProductDto[] = []
  categoryfilter: string[] = [];
  hideFilter: boolean = false;

  isLoading = false;

  public category: categoryDto[] = [];

  @ViewChild("searchProduct") searchProduct: ElementRef

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.isLoading = true;
    this.productservice.getAllProducts().subscribe(x => {
      this.isLoading = false;
      this.allProducts = x.products;
      this.category = x.categories;
    })
  }

  ngAfterViewInit(): void {
    const searchQuery = fromEvent<any>(this.searchProduct.nativeElement, "keyup")
      .pipe(map(event => event.target.value), debounceTime(900))
    searchQuery.subscribe((query) => {
      this.productservice.searchByQuery(query)
      .subscribe({
        next: (data) => this.allProducts = data?.products,
        error: e => console.log(e)
      })
    })
  }

  changeOrder(e: any) {
    this.productservice.sortingBy(e.target.value)
      .subscribe(data => this.allProducts = data.products)
  }
  
  filterByCategory(applyFilter: boolean = false) {
    if (window.innerWidth > 1024 || applyFilter) {
      let selectCategory = this.category.filter(x => x.select == true).map(z => z.name).join();
      this.productservice.searchByCategory(selectCategory).subscribe({
        next: data => {
          this.allProducts = data.products
          this.hideFilter = false
          console.log(this.allProducts);
        }
      })
    }
  }

  clearCategory() {
    this.category = this.category.map((x) => { x.select = false; return x })
  }

  showfilter() {
    this.hideFilter = !this.hideFilter
  }

}
