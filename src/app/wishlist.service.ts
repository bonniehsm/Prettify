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
  //  returns true if storage created for wishlsit
  //  otherwise, returns false
  checkForWishlist(): boolean {
    if(this.wishlistLocalStorage.getItem(this.key)){
      return true;
    }
    return false;
  }

  //create wishlist object in localStorage
  createWishlistStorage(): void {
    let wishlist: WishlistItem[] = [];
    this.wishlistLocalStorage.setItem(this.key, JSON.stringify(wishlist));
  }

  //add item wishlist
  addToWishlist(item: WishlistItem): void {   
    if(!this.checkForWishlist()){
      this.createWishlistStorage();
    }  
    let wishlist = this.getWishlistItems();    
    wishlist.push(item);
    localStorage.setItem(this.key, JSON.stringify(wishlist));
  }

  //remove from wishlist
  removeFromWishlist(removeItem: WishlistItem): void {
    let wishlist = this.getWishlistItems();
    let newWishlist = wishlist.filter(item => item.id != removeItem.id);
    localStorage.setItem(this.key, JSON.stringify(newWishlist));
  }
  
  //get wishlist
  getWishlistItems(): WishlistItem[] {
    let wishlist: WishlistItem[];
    try{
      wishlist = JSON.parse(localStorage.getItem(this.key));
    }catch(error){
      //console.log(error);
      wishlist = [];
    }
    return wishlist;
  }

  //clear wishlist
  clearWishlist(): void {
    localStorage.removeItem(this.key);
    this.wishlist = [];
  }

  //check if item exists on the wishlist
  checkWishlistById(id: number): boolean {
    let wishlist = this.getWishlistItems();
    let onWishlist = false;
    try{
      wishlist.forEach(item => {
        if(item.id === id){
          // console.log(`on wishlist`);
          onWishlist =  true;
        }
      });
    }catch(error){
      // console.log(`error: ${error}`);
    }
    return onWishlist;
  }
}
