import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = localStorage.getItem('ServerUrl');
  constructor() { }
}
