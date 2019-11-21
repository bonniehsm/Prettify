import { Component, OnInit } from '@angular/core';
import { WishlistItem } from './../wishlist-item';
import { WishlistService } from './../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  items: WishlistItem[];

  constructor(private wishlistService: WishlistService) { 
  }

  ngOnInit() {
    this.getWishlist();
  }

  getWishlist(): void {
    this.items = this.wishlistService.getWishlistItems();
  }

  clearWishlist(): void {
    this.wishlistService.clearWishlist();
    //refresh list
    this.getWishlist();
  }

}
