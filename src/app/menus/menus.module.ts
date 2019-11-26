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
  MatSidenavModule,
} from '@angular/material';
import { AppRoutingModule } from './../app-routing.module';
import { SubmenuComponent } from './submenu/submenu.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [TopMenuNavigationComponent, SubmenuComponent, SidenavComponent],
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
    MatSidenavModule,
  ],
  exports: [
    TopMenuNavigationComponent, SidenavComponent
  ],
})
export class MenusModule { }
