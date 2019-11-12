import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: Product[];
  category: String;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(()=> this.getProductsByCategory());
  }

  getCategory(): void{
    this.category = this.route.snapshot.paramMap.get('category');
  }

  getProductsByCategory(): void {
    this.getCategory();
    this.productService.getProductsByCategory(this.category)
      .subscribe(products => this.products = products);
  }

}
