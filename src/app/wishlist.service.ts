import { Injectable } from '@angular/core';
import { WishlistItem } from './wishlist-item';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private key = 'myWishlistItems';
  private wishlistLocalStorage = window.localStorage;
  private wishlist: WishlistItem[];

  constructor() { }

  //check if storage object created
  checkForWishlist(): boolean {
    if(this.wishlistLocalStorage.getItem(this.key)){
      return false;
    }
    return true;
  }

  //create wishlist object in localStorage
  createWishlistStorage(): void {
    //this.wishlist = [];
    let wishlist: WishlistItem[];
    this.wishlistLocalStorage.setItem(this.key, JSON.stringify(wishlist));
  }

  //add item wishlist
  addToWishlist(item: WishlistItem): void {
    let wishlist = this.getWishlistItems();
    /** TEST */
    console.log(`wishlist-service = addToWishlist`);
    console.log(`item to be added--> ${JSON.stringify(item)}`);
    console.log(`${this.wishlistLocalStorage.getItem(this.key)}`);    
    
    if(!this.checkForWishlist()){
      this.createWishlistStorage();
    }
    //this.wishlist.push(item);
    //localStorage.setItem(this.key, JSON.stringify(this.wishlist));    
    wishlist.push(item);
    localStorage.setItem(this.key, JSON.stringify(wishlist));
  }

  //remove from wishlist
  removeFromWishlist(removeItem: WishlistItem): void {
    //this.wishlist = this.wishlist.filter(item => item.id != removeItem.id);
    let wishlist = this.getWishlistItems();
    let newWishlist = wishlist.filter(item => item.id != removeItem.id);
    localStorage.setItem(this.key, JSON.stringify(newWishlist));
  }
  
  //get wishlist
  getWishlistItems(): WishlistItem[] {
    return JSON.parse(localStorage.getItem(this.key));
  }

  //clear wishlist
  clearWishlist(): void {
    localStorage.removeItem(this.key);
    this.wishlist = [];
  }

  //check if item exists on the wishlist
  checkWishlist(id: number): boolean {
    console.log(`check wishlist`);
    //console.log(this.wishlist);
    let wishlist = this.getWishlistItems();
    console.log(wishlist);
    let onWishlist = false;
    try{
      //this.wishlist.forEach(item => {
      wishlist.forEach(item => {
        if(item.id === id){
          console.log(`on wishlist`);
          onWishlist =  true;
        }
      });
    }catch(error){
      console.log(`error: ${error}`);
    }
    return onWishlist;
  }
}
