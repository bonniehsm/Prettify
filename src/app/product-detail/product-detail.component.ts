import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';
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
    ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
      .subscribe((product) => {
        this.product = product;
        //set default model
        this.model = new CartItem(product.id, product.options[0], product.price[0]);
      });
  }

  toggleWishList(): void {
    this.onWishList = !this.onWishList;
  }

  addToCart(): void {

  }

}
