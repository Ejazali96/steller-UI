import { Injectable } from '@angular/core';
import { baseUrl, checkoutApi } from './../constants/api/product.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckedoutService {

  constructor(private http:HttpClient) { }

  delivered(token:string, query:any):Observable<any>{
    return this.http.get<any>(baseUrl+checkoutApi.toDelivered+token+"&query="+query);
  }
  pickup(token:string, query:any):Observable<any>{
    return this.http.get<any>(baseUrl+checkoutApi.toPickup+token+"&query="+query);
  }
}
