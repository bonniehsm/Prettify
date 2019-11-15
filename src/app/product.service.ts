import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';
import { MOCK_PRODUCTS } from './mock-products';
import { SubCategories } from './subcategories';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private productsUrl = 'api/products';
  private allCategoriesUrl = 'api/allCategories';

  constructor( 
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  getProductsByCategory(category: string): Observable<Product[]> {  
    /**TODO: add error handling */
    return this.http.get<Product[]>(this.productsUrl)
    //return of(MOCK_PRODUCTS)
      .pipe(map( products => products.filter( product => product.category == category )));
  }

  getSubCategories(category: string): Observable<Object>{
    return of(SubCategories);
    /*
    return this.http.get<Object>(this.allCategoriesUrl)
      .pipe(map( products => products.filter( product => product.category == category )));
    */
  }

  getAllCategories(): Observable<Object>{
    return this.http.get<Object>(this.allCategoriesUrl).pipe(
      catchError(this.handleError<Object>(`getAllCategories`))
    );
  }  

  getProductById(id: number): Observable<Product>{
    /**todo: add error handling */
    //return of(MOCK_PRODUCTS.find(product => product.id === id));
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError<Product>(`getProduct By Id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {

      //TODO: send the error to a remote logging infrastructure */
      console.log(error); //log to console for now

      //TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      //let the app keep running by returning an empty result
      return of(result as T);
    }
  }
}
