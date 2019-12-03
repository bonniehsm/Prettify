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
  onWishlist = false;  
  //TEST
  wishlist: WishlistItem[];

  constructor( 
    private productService: ProductService,
    private route: ActivatedRoute,
    private wishlistService: WishlistService,
    private cartService: CartService,
    ) { }

  ngOnInit() {
    this.getProduct();
    this.checkIfOnWishlist();
  }

  /* TEST - get wishlist*/
  getWishlist(): void {
    this.wishlist = this.wishlistService.getWishlistItems();
  }

  checkIfOnWishlist(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.onWishlist = this.wishlistService.checkWishlistById(id);
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
      .subscribe((product) => {
        this.product = product;
        //set default cartItem
        this.model = new CartItem(product.id, product.name, product.options[0], product.price[0]);
      });
  }

  toggleWishlist(): void {
    let wishlistItem = new WishlistItem(this.model.id, this.product.name, this.model.option, this.model.price);
    if(this.onWishlist){
      //remove from wishlist
      this.wishlistService.removeFromWishlist(wishlistItem);
    }else{
      //add to wishlist
      this.wishlistService.addToWishlist(wishlistItem);
    }
    this.onWishlist = !this.onWishlist;    
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
    this.cartService.addToCart(this.model);
  }

}
