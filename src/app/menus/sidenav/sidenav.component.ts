import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  allSubProductCategories$: Object;

  constructor(
    private productService: ProductService,    
  ) { }

  ngOnInit() {
    this.getAllCategories();  
  }

  /**
   * This methods gets all categories and subcategories for the side navigation.
   */
  getAllCategories(): void {
    this.productService.getAllCategories()
      .subscribe((allSubProductCategories) => {      
        this.allSubProductCategories$ = allSubProductCategories;
      });
  }

}
