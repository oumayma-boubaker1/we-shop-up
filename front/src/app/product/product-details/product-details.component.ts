import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/services/product/product.service';
import { Product } from 'src/Models/product' ;
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
  product: Product;
  productId: number;
  sizeId: number;
  colorId: number;



  constructor(private productService: ProductService, private route: ActivatedRoute) {
      this.product = new Product();

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.productId = params [' id '];
      } )
      this.getProductDetailsById();
    }
    getProductDetailsById(){
      this.productService.getProductDetailsById(this.productId)
      .subscribe(p => {
        this.product = p as Product;
        this.colorId = p.Color[0].AttributeValueId;
        this.sizeId = p.Size[0].AttributeValueId;
        console.log(this.product);
      })
    }
  }
