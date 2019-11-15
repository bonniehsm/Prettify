import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Category } from './mock-products';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const products = [
      {
        id: 1,
        category: Category.Makeup,
        name: "The Slim Matte Lipstick",
        price: [50],
        size: "",
        description: "A super-slim, square lipstick that provides luxurious, full, long wear, and matte color in couture-inspired shades developed for every skin tone",
        images: ["", ""],
        options: ["Red", "Pink", "Orange", "Fuschia"],
      },
      {
          id: 2,
          category: Category.Makeup,
          name: "Power Bullet Matte Lipstick",
          price: [34],
          size: "",
          description: "A highly-pigmented lipstick that delivers unparalleled color payoff in a silky-smooth, plush-matte formula",
          images: ["", ""],
          options: [
              "deep chocolate brown", 
              "spiced cinnamon Mocha", 
              "cute pinky brick", 
              "bold red (cool toned)", 
              "saturated pink with coral (warm toned)"
          ],
      },
      {
          id: 3,
          category: Category.Makeup,
          name: "Luxury Eyeshadow Palette",
          price: [65],
          size: "",
          description: "A four-step eyeshadow quad with buildable, non-creasing formula and pigmented shades for day to night",
          images: ["", ""],
          options: [
              "Pillow Talk - rose-bud, pink, nude and taupe", 
              "Bella Sofia - bronze and copper toned eyeshadow palette", 
              "The Rock Chick - silver grey & charcoal shades", 
              "The Glamour Muse - grey, silver & violet shades"],
      },
      {
          id: 4,
          category: Category.Makeup,
          name: "Cheek Color",
          price: [84],
          size: "",
          description: "A powder blush with a color-rich formula that glides onto skin with the comfort of a cream.",
          images: ["", ""],
          options: ["Flush", "Pink", "Wicked"],
      },
      {
          id: 5,
          category: Category.Skincare,
          name: "Youth Preserve Moisturizer",
          price: [60, 20],
          size: "",
          description: "A daily moisturizer that gives a dewy glow and prevents early signs of aging, so you look good now and later.",
          images: ["", ""],
          options: ["1.6 oz/ 50 mL", "0.5 oz/ 15 mL"],
      },
      {
          id: 6,
          category: Category.Skincare,
          name: "Facial Cream",
          price: [65, 38],
          size: "",
          description: "A lightweight moisturizer that provides 24-hour hydration.",
          images: ["", ""],
          options: ["1.7 oz/ 50 mL", "4.2 oz/ 125 mL"],
      },
      {
          id: 7,
          category: Category.Skincare,
          name: "Face Cleanser",
          price: [49, 20],
          size: "",
          description: "A bestselling, gently powerful face wash with soy proteins that removes all traces of dirt and makeup without stripping skin of essential moisture.",
          images: ["", ""],
          options: ["5.1 oz/ 150 mL", "1.7 oz/ 50 mL"],
      },
      {
          id: 8,
          category: Category.Hair,
          name: "Honey Moisture Conditioning Mask",
          price: [46],
          size: "",
          description: "A bestselling mask for dry, damaged hair infused with organic, unpasteurized honey, delivering superior humectant properties for even more moisture.",
          images: ["", ""],
          options: ["8 oz/ 236 mL"],
      },
      {
          id: 9,
          category: Category.Hair,
          name: "Moroccan Oil Treatment",
          price: [41],
          size: "",
          description: "A versatile, argan oil-infused hair treatment and styler that promotes softer, stronger hair with increased shine and less frizz.",
          images: ["", ""],
          options: ["1.7 oz/ 50 mL"],
      },
      {
          id: 10,
          category: Category.Hair,
          name: "Bond Maintenance Shampoo",
          price: [38],
          size: "",
          description: "A highly moisturizing, reparative shampoo that leaves hair easy to manage, shiny, and healthier with each use.",
          images: ["", ""],
          options: ["8.5 oz/ 250 mL"],
      },    
      {
          id: 11,
          category: Category.Hair,
          name: "Bond Maintenance Conditioner",
          price: [38],
          size: "",
          description: "A highly-moisturizing, reparative conditioner that protects and repairs damaged hair, split ends, and frizz by re-linking broken bonds.",
          images: ["", ""],
          options: ["8.5 oz/ 250 mL"],
      },    
    ];
    
    const allCategories = {
      "makeup": {
          face: ["Foundation", "Concealer", "Powder"],
          eye: ["Eye Palettes", "Mascara", "Eyeliner"],
          lip: ["Lipstick", "Lip gloss", "Lip Liner"],
          cheek: ["Blush", "Bronzer"],
      },
      "skincare": {
          moisturizers: ["Moisturizers", "Night Creams", "Face Oils"],
          cleansers: ["Face Wash & Cleansers", "Exfoliators", "Makeup Removers"],
          treatments: ["Face Serums", "Blemish & Acne Treatments"],          
      },
      "hair": {
          "Shampoo & Conditioner": ["Shampoo", "Conditioner", "Dry Shampoo"] ,
          "Hair Styling & Treatments": ["Hair Spray", "Hair Oil", "Hair Masks"],  
      }
  }

    return {products, allCategories};
  }

}
