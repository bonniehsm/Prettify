export class CartItem {
    productId: number;
    option: string;
    price: number;
    quantity: number; 

   constructor(
    productId: number,
    option: string,
    price: number,
    quantity: number = 1,    
   ){
       this.productId = productId;
       this.option = option;
       this.price = price;
       this.quantity = quantity;       
   }
}