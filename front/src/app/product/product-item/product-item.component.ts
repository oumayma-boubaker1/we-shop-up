import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  listeSizes = ['S', 'M', 'L', 'XL', 'XXL'];
  size: string;
  listecolors = ['White', 'Black', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Purple'];
  color: string;
  constructor() { }

  //  TODO @Input produit

  ngOnInit(): void {
  }

}
