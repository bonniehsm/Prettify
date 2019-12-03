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
  checkCartLocalStorageExists(): boolean {
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
  addToCart(cartItem: CartItem): void {   
    if(!this.checkCartLocalStorageExists()){
      console.log(`No LocalStorage for cart items. call createCartStorage()`);
      this.createCartStorage();
      //add to cart
    }  
    let cartItems = this.getCartItems();
    let found = false;    
    //check if item exists in cart already        
    for(let i = 0; i < cartItems.length; i++){
      if(cartItem.id === cartItems[i].id && cartItem.option === cartItems[i].option){
        console.log(`item found. increment quantity`);
        cartItems[i].quantity++;
        found = true;
        break;
      }
    }    
    if(!found){
      console.log(`push item to cart`)
      cartItems.push(cartItem);
    }
    localStorage.setItem(this.key, JSON.stringify(cartItems));
  }

  //remove from cart list
  removeFromCart(removeItem: CartItem): void {
    let cart = this.getCartItems();
    let newCart = cart.filter(item => {
      item.id != removeItem.id && item.option != removeItem.option
    });
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
  // checkCartByIdAndOption(id: number, option:string): boolean {
  //   let cartItems = this.getCartItems();
  //   let inCart = false;
  //   try{
  //     cartItems.forEach(item => {
  //       if(item.id === id && item.option === option){
  //         // console.log(`in cart`);
  //         inCart =  true;
  //       }
  //     });
  //   }catch(error){
  //     // console.log(`error: ${error}`);
  //   }
  //   return inCart;
  // }

}
