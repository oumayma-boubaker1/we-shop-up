import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  listeSizes = ['S', 'M', 'L', 'XL', 'XXL'];
  size: string;
  listecolors = ['White', 'Black', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Purple'];
  color: string;
  constructor() { }

  ngOnInit(): void {
  }

}
