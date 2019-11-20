export class CartItem {
    productId: number;
    size: string;
    price: number;
    quantity: number; 

   constructor(
    productId: number,
    size: string,
    price: number,
    quantity: number = 1,    
   ){
       this.productId = productId;
       this.size = size;
       this.price = price;
       this.quantity = quantity;       
   }
}