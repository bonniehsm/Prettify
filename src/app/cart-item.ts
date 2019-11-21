import { MarkedItem } from './marked-item';

export class CartItem implements MarkedItem{
    id: number;
    option: string;
    price: number;
    quantity: number; 

   constructor(
    id: number,
    option: string,
    price: number,
    quantity: number = 1,    
   ){
    //    this.id = id;
    //    this.option = option;
    //    this.price = price;
    //    this.quantity = quantity;       
   }

   addProduct(item: CartItem): void {

   }

   removeProduct(item: CartItem): void {

   }
}