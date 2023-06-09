import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent {
  @Input() products: Product[] = [];
  selectedProduct: Product = null as any;

  constructor(
    private cart: Cart,
    private router: Router) //ürün detayına gitmek için ekledik){
    {}

    addProductToCart(product: Product){
      this.cart.addItem(product);
      this.router.navigateByUrl('/cart'); //ekle butonuna tıklayınca detay sayfasına yönlen.
  }

  displayDetails(product: Product){
    this.selectedProduct = product;
  }

  hideDetails(){
    this.selectedProduct = null as any;
  }
}
