import { Injectable } from '@angular/core';
import { WishlistItem } from './wishlist-item';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private key = 'myWishlistItems';
  private wishlistLocalStorage = window.localStorage;

  constructor() { }

  //check if storage object created
  checkForWishlist(): boolean {
    if(this.wishlistLocalStorage.getItem(this.key) == null){
      return false;
    }else{
      return true;
    }
  }

  //create wishlist object in localStorage
  createWishlistStorage(): void {
    let wishlist: WishlistItem[];
    this.wishlistLocalStorage.setItem(this.key, JSON.stringify(wishlist));
  }

  //add item wishlist
  addToWishlist(item: WishlistItem): void {
    console.log(`wishlist-service = addToWishlist`);
    console.log(`${this.wishlistLocalStorage.getItem(this.key)}`);    
    if(!this.checkForWishlist()){
      this.createWishlistStorage();
      console.log(`${JSON.stringify(item)}`);
      //add item to wishlist -- TEST
      const mockItem = new WishlistItem(99, 'red', 123);
      localStorage.setItem(this.key, JSON.stringify(mockItem));
    }else{
      //check for existence of object in wishlist. then add item to wishlist
    }
  }

  //remove from wishlist
  removeFromWishlist(item: WishlistItem): void {

  }
  
  //get wishlist -- change to return an Observable
  getWishlistItems(): void {
    const items = JSON.parse(localStorage.getItem(this.key));
  }
}
