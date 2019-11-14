import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../product.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  makeupCategory$: Object;
  skincareCategory$: Object;
  hairCategory$: Object;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllCategories()
      .subscribe((allCategories) => {
        const categoryKeys = Object.keys(allCategories);
        this.makeupCategory$ = allCategories[categoryKeys[0]];
        this.skincareCategory$ = allCategories[categoryKeys[1]];
        this.hairCategory$ = allCategories[categoryKeys[2]];
      });    
  }

}
