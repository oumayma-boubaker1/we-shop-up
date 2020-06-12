import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/services/product/product.service';
// import { DataService } from 'src/services/Shared/data.service';
// import { CartProduct } from 'src/Models/cart-product';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
//   quantity: number;
//   @Input() productId: number;
//   @Input() isHomePage: boolean;
//   messge: string;
    constructor( ) { }
  ngOnInit(): void {

  }
//   constructor(private productService: ProductService,
//               private toastr: ToastrService,
//               private dataService: DataService
//               ) { }

//   ngOnInit(): void {
//     this.quantity = 1;
//     this.dataService.currentMessage.subscribe(msg => this.messge = msg);
//   }

//   onAddProductToCart(){
//     let product: CartProduct;
//     this.productService.getProductDetailsById(this.productId)
//     .subscribe(p => {
//       product = p as CartProduct;
//       product.ProductCount = this.quantity;
//       let cart: CartProduct[] = JSON.parse(localStorage.getItem('Cart'));
//       if (cart == null){
//         cart = [];
//         cart.push(product);
//       } else{
//         const currentProduct = cart.filter(a => a.ProductId === product.ProductId);
//         if (currentProduct.length > 0){
//           cart.filter(a => {
//             a.ProductCount = a.ProductCount + this.quantity;
//           });
//         } else{
//           cart.push(product);
//         }
//       }
//       this.dataService.updateCartItemCount(cart.length);
//       this.dataService.updateShoppingCart(cart);
//       localStorage.setItem('Cart', JSON.stringify(cart));
//       this.toastr.success('<i class="fas fa-check ml-1 pr-2"></i><strong>Product Added to the Cart</strong>', null, {
//         timeOut: 3000,
//         toastClass: 'toast-header',
//         progressBar: true,
//         progressAnimation: 'decreasing',
//         closeButton: true,
//         enableHtml: true
//       });
//     });
//   }

}
