import { Component } from "@angular/core";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { Category } from "../model/category.model";
import { ProductRepository } from "../model/product.repository";

@Component({
  selector: 'shop',
  templateUrl: 'shop.component.html',
  styles: [`
  .pt-100 {padding-top:100px}
`]
})
export class ShopComponent{
    public selectedCategory: Category | undefined = null!; // list grupta class'a active özelliği vermek için.
    public productsPerPage = 4; // sayfalarda kaç ürün olacak
    public selectedPage = 1; //hangi sayfa etkin. = ürün gösterilen sayfa
    // 1 * 3 => 3 (0,3)
    // 2 * 3 => 6 (5,3)

    constructor(
        private productRepository : ProductRepository,
        private categoryRepository: CategoryRepository
        ) {}

    get products(): Product[]{
        let index = (this.selectedPage-1) * this.productsPerPage;
        // sayfada 3'er ürün gösterilmesini istediğimde.
        // 1. sayfada = (1-1) * 3 => 0. veriden başlıyarak al
        // 2. sayfada = (2-1) * 3 => 3. veriden başlıyarak al

        return this.productRepository
        .getProducts(this.selectedCategory)
        .slice(index,index + this.productsPerPage); //(hangi indexden başlıyacak , kaçıncı veriye kadar alacak) // 0,3 => [0 , 1 , 2] ;; 3,6 => [3 , 4 , 5]
    }

    get categories(): Category[]{
        return this.categoryRepository.getCategories();
    }

    changeCategory(newCategory?:  Category | undefined ){
        this.selectedCategory = newCategory;
        //this.products;
    }
}