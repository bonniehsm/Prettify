import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'shop/:category', component: ShopComponent },
  { path: 'details/:id', component: ProductDetailComponent },
  { path: 'wishlist', component: WishlistComponent },
  /* '**' means to match everything - not just one word but anything that follows it e.g. foo/bar/baz */
  //uncomment after home component created 
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
