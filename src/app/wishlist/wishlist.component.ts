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

  constructor(private wishlistService: WishlistService) { }

  ngOnInit() {
  }

  getWishList(): void {
    
  }

  removeFromWishlist(): void {

  }

}
