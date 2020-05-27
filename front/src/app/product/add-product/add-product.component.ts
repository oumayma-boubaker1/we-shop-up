import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  erreur = false;
  constructor(private prodService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }
  addProduct(newProd) {

    this.prodService.addProductAPI(newProd).subscribe(
      (response) => {
        this.router.navigate(['addProduct']);
      },
      (error) => {
        this.erreur = true;
        console.log('Error with AddProduct()');

      }
    );


  }


}
