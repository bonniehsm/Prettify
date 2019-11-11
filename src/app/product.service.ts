import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Product } from './product';
import { MOCK_PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor( private route: ActivatedRoute) { }

  getProductsByCategory(category: String): Observable<Product[]> {
    console.log(`ProductsService category=${category}`);    
    return of(MOCK_PRODUCTS)
      .pipe(map( products => products.filter( product => product.category == category)));
  }
}
