import { baseUrl, productApi } from './../constants/api/product.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDto, addCartDto } from '../constants/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "./assets/json/product.json"
  constructor(private http: HttpClient) { }


  getAllProduct(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(baseUrl + productApi.getAllProduct);
  }

  getProductById(id: string) : Observable<any> {
    return this.http.get<any>(baseUrl + productApi.getProductById + id)
  }
  
  searchByQuery(query:string): Observable<any>{
    return this.http.get<any>(baseUrl + productApi.searchByQuery + query)
  }
  searchByCategory(category:string) : Observable<any>{
    return this.http.get(baseUrl + productApi.searchByCategory + category)
    
  }
  sortingBy(sort:string) : Observable<any>{
    return this.http.get<any>(baseUrl + productApi.sortingBy + sort)
  }
  cartOverview(token_id:any) : Observable<any>{
    return this.http.get<any>(baseUrl + productApi.cartOverview + token_id)
  }
  addToCart(data:addCartDto) : Observable<any>{
    return  this.http.post<any>(baseUrl + productApi.addToCart, data)
  }

  minicart(token_id: any) {
    return this.http.get<any>(baseUrl + productApi.minicart + token_id)
  }

}
