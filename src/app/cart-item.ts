export class CartItem {
    
    productId: number;
    quantity: number;
    size: string;
    price: number;
    
   constructor(
    productId: number,
    quantity: number,
    size: string,
    price: number,
   ){
       this.productId = productId;
       this.quantity = quantity;
       this.size = size;
       this.price = price;
   }
}