import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuNavigationComponent } from './top-menu-navigation/top-menu-navigation.component';
import { 
  MatIconModule,
  MatCardModule,  
  MatMenuModule,
  MatTabsModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
} from '@angular/material';
import { AppRoutingModule } from './../app-routing.module';
import { SubmenuComponent } from './submenu/submenu.component';

@NgModule({
  declarations: [TopMenuNavigationComponent, SubmenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,  
    MatMenuModule,
    MatTabsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    TopMenuNavigationComponent,
  ],
})
export class MenusModule { }
