import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuNavigationComponent } from './top-menu-navigation/top-menu-navigation.component';
import { 
  MatIconModule,
  MatCardModule,  
  MatMenuModule,
  MatTabsModule,
} from '@angular/material';
import { AppRoutingModule } from './../app-routing.module';
import { SubmenuComponent } from './submenu/submenu.component';

@NgModule({
  declarations: [TopMenuNavigationComponent, SubmenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,  
    MatMenuModule,
    MatTabsModule,
    AppRoutingModule,
  ],
  exports: [
    TopMenuNavigationComponent,
  ],
})
export class MenusModule { }
