import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private key = 'myCart';
  private cartLocalStorage = window.localStorage;
  private cartItems: CartItem[];  

  constructor() { }
  
  //check if storage object created
  //  returns true if storage created for wishlsit
  //  otherwise, returns false
  checkForCartList(): boolean {
    if(this.cartLocalStorage.getItem(this.key)){
      return true;
    }
    return false;
  }

  //create CartItem object in localStorage
  createCartStorage(): void {
    let cartList: CartItem[] = [];
    this.cartLocalStorage.setItem(this.key, JSON.stringify(cartList));
  }

  //add item to cart
  addToCart(item: CartItem): void {   
    if(!this.checkForCartList()){
      this.createCartStorage();
    }  
    let cartList = this.getCartItems();    
    cartList.push(item);
    localStorage.setItem(this.key, JSON.stringify(cartList));
  }

  //remove from cart list
  removeFromCart(removeItem: CartItem): void {
    let cart = this.getCartItems();
    let newCart = cart.filter(item => item.id != removeItem.id);
    localStorage.setItem(this.key, JSON.stringify(newCart));
  }
  
  //get cart list
  getCartItems(): CartItem[] {
    let cartList: CartItem[];
    try{
      cartList = JSON.parse(localStorage.getItem(this.key));
    }catch(error){
      //console.log(error);
      cartList = [];
    }
    return cartList;
  }

  //clear cart
  clearCart(): void {
    localStorage.removeItem(this.key);
    this.cartItems = [];
  }

  //check if item exists in the cart
  checkCartById(id: number): boolean {
    let cartItems = this.getCartItems();
    let inCart = false;
    try{
      cartItems.forEach(item => {
        if(item.id === id){
          // console.log(`inc art`);
          inCart =  true;
        }
      });
    }catch(error){
      // console.log(`error: ${error}`);
    }
    return inCart;
  }

}
