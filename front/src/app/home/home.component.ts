import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listCategory = [];
  selectedCategory = '';

constructor(private prodService: ProductService) { }

ngOnInit() {
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

}
