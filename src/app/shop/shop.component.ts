import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {
  products$: Product[];
  category: string;
  allSubProductCategories$: Object;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.getProductsByCategory();
      this.getAllCategories();  
    });
  }

  /**
   * This method extracts the category from the URL
   */
  getCategory(): void {
    this.category = this.route.snapshot.paramMap.get('category');
  }

  /**
   * This methods gets all categories and subcategories for the side navigation.
   */
  getAllCategories(): void {
    this.productService.getAllCategories()
      .subscribe((allSubProductCategories) => {      
        this.allSubProductCategories$ = allSubProductCategories;
      });
  }

  /**
   * This methods gets all product for the category currently viewed
   */
  getProductsByCategory(): void {
    this.getCategory();
    this.productService.getProductsByCategory(this.category)
      .subscribe(products => this.products$ = products);
  }

}
