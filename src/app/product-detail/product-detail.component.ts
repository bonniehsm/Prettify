import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { WishlistItem } from '../wishlist-item';
import { WishlistService } from '../wishlist.service';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  price: number;
  model: CartItem;
  onWishList = false;  

  constructor( 
    private productService: ProductService,
    private route: ActivatedRoute,
    private wishlistService: WishlistService,
    ) { }

  ngOnInit() {
    this.getProduct();
    //test
    const testItem = new WishlistItem(1, "123", 456);
    this.wishlistService.addToWishlist(testItem);
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
      .subscribe((product) => {
        this.product = product;
        //set default cartItem
        this.model = new CartItem(product.id, product.options[0], product.price[0]);
      });
  }

  toggleWishList(): void {
    this.onWishList = !this.onWishList;
  }

  changeOption(event: any): void {
    let target = event.target;
    let option = target.innerText.trim();  
    //no changes needed  
    if(option == this.model.option){
      return;
    }
    //change according to the product category
    if(this.product.category === 'makeup' && this.product.price.length == 1){
      this.model.option = option;
      return;
    }else {
      const index = this.product.options.indexOf(option);
      this.model.option = this.product.options[index];
      this.model.price = this.product.price[index];
    }
  }

  addToCart(): void {

  }

}
