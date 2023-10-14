import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product-type";
import {environment} from "../../../environments/environment";

@Injectable(//{providedIn: 'root'}
)
export class ProductService {
  productTitle: string = '';
  inputNavbarValue: string = '';


  constructor(private http: HttpClient) {
  }

  // getProductId(param: string): string {
  //   let result = this.http.get<{ id: ProductType }>(environment.apiUrl + "tea?search=" + param);
  //   return  Object.keys(result)[0];
  // }


  getProduct(param: string): Observable<{ id: ProductType }> {
    return this.http.get<{ id: ProductType }>(environment.apiUrl + "tea?search=" + param);
  }


}
