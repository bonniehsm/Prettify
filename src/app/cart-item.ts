import { MarkedItem } from './marked-item';

export class CartItem implements MarkedItem{
    id: number;
    name: string;
    option: string;
    price: number;
    quantity: number; 
    image?: string;

   constructor(
    id: number,
    name: string,
    option: string,
    price: number,
    quantity: number = 1,
    image?: string,    
   ){
       this.id = id;
       this.name = name;
       this.option = option;
       this.price = price;
       this.quantity = quantity;       
       if(image !== null){
            this.image = image;
       }
   }
}