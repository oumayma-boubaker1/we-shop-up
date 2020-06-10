import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize = 0;
  productList = [];
  // prod: any;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getProductList();
  }
  get products() {
    return this.productList
      .map((product, i) => ({id: i + 1, ...product}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ShowProductForm() {
    this.router.navigate(['/product/add'] );
   }

  getProductList() {
    return this.productService.getProductList().subscribe(
      (data: any) => {
        this.productList = data;
      }
    );
  }

  editProduct(id){
    this.router.navigate(['/product/edit', id] );
   }

  delete(id){
    if (confirm('Do you really want to delet this product ?'))
     {
        // appele du service delete
       this.productService.deleteProductAPI(this.productList[id].subscribe(
         (response) => {
          //  this.router.navigate(['product/list']);
         },
         (error) => {
           console.log('Error with Delete !');
         }));
       this.getProductList();
      }
}


}
