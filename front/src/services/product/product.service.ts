import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/Models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = localStorage.getItem('ServerUrl');
  constructor(private http: HttpClient) { }

// productdetail
  getProductDetailsById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}product/getProductDetails?productId=${productId}`);
  }


}
