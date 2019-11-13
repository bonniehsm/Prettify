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
  category: string;
  allProductCategories: Object;
  currentCategory: Object;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.getProductsByCategory();
      this.getAllCategories();
      this.setCurrentCategory();  //test     
    });
  }

  getCategory(): void {
    this.category = this.route.snapshot.paramMap.get('category');
  }

  getAllCategories(): void {
    this.productService.getAllCategories(this.category)
      .subscribe((allCategories) => {      
        this.allProductCategories = allCategories;
        console.log(this.allProductCategories);
      });
  }

  setCurrentCategory(): void {
    this.currentCategory = this.allProductCategories[this.category];
    Object.keys(this.currentCategory).forEach(key=>console.log(`${key}`));
  }

  getProductsByCategory(): void {
    this.getCategory();
    this.productService.getProductsByCategory(this.category)
      .subscribe(products => this.products = products);
  }

}
