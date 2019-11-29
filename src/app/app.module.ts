import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { 
  MatButtonModule,
  MatIconModule,
  MatCardModule,  
  MatMenuModule,
  MatTabsModule,
  MatGridListModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MenusModule } from './menus/menus.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
// import { TopMenuNavigationComponent } from './menus/top-menu-navigation/top-menu-navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ProductDetailComponent,
    // TopMenuNavigationComponent,
    PageNotFoundComponent,
    WishlistComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    /*Intercepts HTTP requests and returns simulated server responses. 
      Remove it when a real server is ready to receive requests.*/
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MenusModule,    
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    AppRoutingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
