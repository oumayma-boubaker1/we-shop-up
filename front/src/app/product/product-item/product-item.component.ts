import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/Models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  listCategory = [];
  product: Product;
  id: any;
  constructor(private prodService: ProductService,
              private activatedRouteItem: ActivatedRoute,
              private router: Router) { }

  //  TODO @Input produit

  ngOnInit(): void {
    this.id = this.activatedRouteItem.snapshot.params.id;
    this.getListCategory();
    this.getProductById();
  }
  getListCategory(){
    this.prodService.getListCategory().subscribe(
      (data: any) => {
        this.listCategory = data;
        // console.log(data)
      }
    );
  }

  getProductById(){
    this.prodService.getProductById(this.id).subscribe(
      (data: any) => {
        this.product = data;
      }
    );
  }



}
