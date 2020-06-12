import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  listCategory = [];
  listOfSizes = ['S', 'M', 'L', 'XL', 'XXL'];
  listOfColors = ['White', 'Black', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Purple'];
  selectedColor = '';
  selectedCategory = '';
  selectedSize = '';
  erreur = false;
  product: any;
  id: any;
  // @Input('data') product;


  constructor(private prodService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
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

  updateProduct() {

    console.log('edit');

    this.prodService.EditProduct(this.product, this.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['product/list']);
      },
      (error) => {
        this.erreur = true;
        console.log('Error with EditProduct()');
      }
    );
  }




}
