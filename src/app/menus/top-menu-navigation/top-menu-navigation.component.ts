import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './../../product.service';

@Component({
  selector: 'app-top-menu-navigation',
  templateUrl: './top-menu-navigation.component.html',
  styleUrls: ['./top-menu-navigation.component.scss']
})
export class TopMenuNavigationComponent implements OnInit {
  @Input() brand: string;

  makeupCategory$: Object;
  skincareCategory$: Object;
  hairCategory$: Object;

  constructor(
    private productService: ProductService,
  ) { }

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


/**
 * 
 * [ 
 *  { "face": [ "Foundation", "Concealer", "Powder" ], 
 *    "eye": [ "Eye Palettes", "Mascara", "Eyeliner" ], 
 *    "lip": [ "Lipstick", "Lip gloss", "Lip Liner" ], 
 *    "cheek": [ "Blush", "Bronzer" ] 
 *  }, 
 *  { "moisturizers": [ "Moisturizers", "Night Creams", "Face Oils" ], "cleansers": [ "Face Wash & Cleansers", "Exfoliators", "Makeup Removers" ], "treatments": [ "Face Serums", "Blemish & Acne Treatments" ] }, { "Shampoo & Conditioner": [ "Shampoo", "Conditioner", "Dry Shampoo" ], "Hair Styling & Treatments": [ "Hair Spray", "Hair Oil", "Hair Masks" ] } ] 
 */