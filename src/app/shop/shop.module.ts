import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

//modül sayfalarında olması şart.
@NgModule({
    //ModelModule dediğimde artık : Model Module'nin tüm class larınını shop modül içinde kullabıp : api işlemlerimi gerçekleştirebileceğim.
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule], //router kullanma sebebimiz routerLink kullanabilmek için.
    providers:[],
    declarations: [ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, ProductListComponent, CategoryListComponent],
    exports: [ShopComponent, CartDetailComponent, CheckoutComponent] //eğerki modülde component var ise : exports etmeliyiz : farklı modülden erişilmesini istiyor isek. 
    // componnet yok ise direk modülden modülü import edip kullanabiliyoruz : kullanılacak modülün export edilmesine gerek yok
    // component ve directive'lerin farklı bir modülden kullanımında export yapmak gerekiyor sadece.
})

export class ShopModule{}
