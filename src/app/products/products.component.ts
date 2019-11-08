import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

import { MOCK_PRODUCTS, Category } from '../mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Product[] = MOCK_PRODUCTS;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
