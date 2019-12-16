import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  private cartItems: CartItem[];
  private subtotal = 0;
  private TAX_RATE = 0.13;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.cartItems.forEach(item => {
      this.subtotal += item.price * item.quantity;
    });
  }

  removeFromCart(): void {

  }
}
