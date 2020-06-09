import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  listCategory = [];
  listOfSizes = ['S', 'M', 'L', 'XL', 'XXL'];
  listOfColors = ['White', 'Black', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Purple'];
  selectedColor = '';
  selectedCategory = '';
  selectedSize = '';
  erreur = false;

  constructor(private prodService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.getListCategory();
  }

  getListCategory(){
    this.prodService.getListCategory().subscribe(
      (data: any) => {
        this.listCategory = data;
        // console.log(data)
      }
    );
  }


  addProduct(newProd) {
    const prod = {
      category: { category_id:  ''},
      name: '',
      Description: '',
      PrimaryImage: '',
      SecondaryImage: '',
      Thumbnail: '',
      Price: '',
      DescountedPrice: '',
      ProductCount: '',
      Color: '',
      Size: '',   };

    prod.name = newProd.name;
    prod.category.category_id = newProd.category;
    prod.Description = newProd.Description;
    prod.Thumbnail = newProd.Thumbnail;
    prod.Price = newProd.Price;
    prod.DescountedPrice = newProd.DescountedPrice;
    prod.ProductCount = newProd.ProductCount;
    prod.Color = newProd.Color;
    prod.PrimaryImage = newProd.path;
    prod.SecondaryImage = newProd.path2;
    prod.Size = newProd.Size;

// console.log(prod)

    this.prodService.addProductAPI(prod).subscribe(
      (response) => {
        this.router.navigate(['product/list']);

        // console.log(response);

      },
      (error) => {
        this.erreur = true;
        console.log('Error with AddProduct()');

      }
    );


  }

  onReset(addForm){
    addForm.reset();
  }
}
