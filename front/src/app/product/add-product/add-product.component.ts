import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  listCategory = ['Traditional', 'French', 'Italian', 'Animal', 'Flower', 'Valentine\'s'];
  listOfSizes = ['S', 'M', 'L', 'XL', 'XXL'];
  listOfColors = ['White', 'Black', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Purple'];
  selectedColor = '';
  selectedCategory = '';
  selectedSize = '';
  erreur = false;
  constructor(private prodService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }
  addProduct(newProd) {
    // console.log(newProd)
    this.prodService.addProductAPI(newProd).subscribe(
      (response) => {
        console.log(response);
       // this.router.navigate(['home']);
      },
      (error) => {
        this.erreur = true;
        console.log('Error with AddProduct()');

      }
    );


  }


}
