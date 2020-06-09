import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/Models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 link = 'http://localhost:3000/';

 // ? url = localStorage.getItem('ServerUrl');

  constructor(private http: HttpClient) { }

// productdetail
  getProductDetailsById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.link}product/getProductDetails?productId=${productId}`);
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.link}products/id/${productId}`);
  }

  addProductAPI(p) {
    // const headers = { Authorization: '' }
    // console.log(JSON.stringify(p))
    return this.http.post(this.link + 'products', p);
  }

  getListCategory(){
    return this.http.get('http://localhost:3000/categories');

    // return this.http.get(this.url + 'categories');
  }
  getProductList(){
    return this.http.get(this.link + 'products');
  }

  EditProduct(p , id): Observable<any> {
    return this.http.put(this.link, + 'products/' + id, p);
  }
  // EditProductById(){
  //   return this.http.get(this.link + 'products');
  // }

  deleteProductAPI(id): Observable<any> {
    return this.http.delete(`${this.link}/${id}`);
  }
}
