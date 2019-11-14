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

@NgModule({
  declarations: [TopMenuNavigationComponent],
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
