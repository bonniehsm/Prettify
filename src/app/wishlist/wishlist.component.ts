import { Component, OnInit } from '@angular/core';
import { WishlistItem } from './../wishlist-item';
import { WishlistService } from './../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  private items: WishlistItem[];
  test: any;
  testAddItem: WishlistItem;

  constructor(private wishlistService: WishlistService) { 
    this.testAddItem = new WishlistItem(99, "option", 50);
  }

  ngOnInit() {
    this.getWishlist();
  }

  getWishlist(): void {
    this.test = this.wishlistService.getWishlistItems();
  }

  removeFromWishlist(): void {

  }

  clearWishlist(): void {
    this.wishlistService.clearWishlist();
    //refresh list
    this.getWishlist();
  }

  //TEST**
  addToWishlist(item: WishlistItem): void {
    this.wishlistService.addToWishlist(item);
    //refresh list
    this.getWishlist();
  }


}
