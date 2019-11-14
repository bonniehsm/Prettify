import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './product';
import { MOCK_PRODUCTS } from './mock-products';
import { SubCategories } from './subcategories';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor( private route: ActivatedRoute) { }

  getProductsByCategory(category: string): Observable<Product[]> {   
    return of(MOCK_PRODUCTS)
      .pipe(map( products => products.filter( product => product.category == category )));
  }

  getSubCategories(category: string): Observable<Object>{
    /**todo: add error handling */
    return of(SubCategories);
  }

  getAllCategories(): Observable<Object>{
    /**todo: add error handling */
    return of(SubCategories);
  }  

  getProductById(id: number): Observable<Product>{
    /**todo: add error handling */
    return of(MOCK_PRODUCTS.find(product => product.id === id));
  }
}
