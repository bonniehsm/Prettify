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
  products$: Product[];
  category: string;
  allSubProductCategories$: Object;
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
    this.productService.getSubCategories(this.category)
      .subscribe((allSubProductCategories) => {      
        this.allSubProductCategories$ = allSubProductCategories;
        console.log(this.allSubProductCategories$);
      });
  }

  setCurrentCategory(): void {
    this.currentCategory = this.allSubProductCategories$[this.category];
    Object.keys(this.currentCategory).forEach(key=>console.log(`${key}`));
  }

  getProductsByCategory(): void {
    this.getCategory();
    this.productService.getProductsByCategory(this.category)
      .subscribe(products => this.products$ = products);
  }

}
