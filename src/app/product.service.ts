import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private clothingProducts = [
    {
      
        id: 1,
        category: 'women',
        name: 'T-Shirt',
        image: 'https://ae01.alicdn.com/kf/S6307ca55c1c8442a970e43eb6f5c46581/CARTELO-Shirt-Men-s-Luxury-Casual-Formal-Shirt-Long-Sleeve-Slim-Fit-Business-Dress-Shirts-Tops.jpg_480x480q90.jpg_.webp',
        price: 10.00,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['red', 'blue', 'green'],
        quantity: 0,
        description: 'A comfortable and stylish t-shirt.'
      },
      {
        id: 2,
        category: 'men',
        name: 'Jeans',
        image: 'https://ae01.alicdn.com/kf/S1a4b3eada8cb497198747e9d42394c08N/Embroidery-CARTELO-Men-s-zipper-Jackets-Casual-Jacket-Men-Sports-Coat-Spring-Army-Cargo-Jacket-Men.jpg_480x480q90.jpg_.webp',
        price: 50.00,
        inStock: true,
        sizes: ['26x30', '28x30', '30x30', '32x30', '34x30'],
        colors: ['black', 'blue', 'gray'],
        description: 'Classic denim jeans for everyday wear.'
      },
      {
        id: 3,
        category: 'kids',
        name: 'Sneakers',
        image: 'https://ae01.alicdn.com/kf/S2af44580cec0497b9cd4bb9ccb35c201t/CARTELO-Spring-Men-s-Casual-Jacket-New-Quality-Zipper-Jacket-Men-Fashion-Business-Jackets-Embroidered-Logo.jpg_480x480q90.jpg_.webp',
        price: 80.00,
        sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
        colors: ['red', 'blue', 'pink'],
        description: 'Comfortable and stylish sneakers.'
      },
      {
        id: 4,
        category: 'women',
        name: 'Dress',
        image: 'https://ae01.alicdn.com/kf/H129fccc4395c40fa972737be95d989254/2022-Mens-Casual-T-shirt-Fashion-Slim-Long-Sleeve-V-Neck-Fitness-T-shirts-Tops-Homme.jpg_480x480q90.jpg_.webp',
        price: 100.00,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['red', 'blue', 'green'],
        description: 'A beautiful and elegant dress for special occasions.'
      },
    {
      id: 5,
      category: 'men',
      name: 'Shirt',
      image: 'https://ae01.alicdn.com/kf/Hd4d0e25c401147b5ab2abd3f04398acfl/New-White-Duck-Down-Jacket-Men-Winter-Warm-Solid-Color-Hooded-Down-Coats-Thick-Duck-Parka.jpg_480x480q90.jpg_.webp',
      price: 30.00,
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'A classic button-up shirt for any occasion.'
    },
    {
      id: 6,
      category: 'kids',
      name: 'Hoodie',
      image: 'https://ae01.alicdn.com/kf/S32410a2c8460489f96a7e8920fcb17a8e/Autumn-Winter-Men-s-Turtleneck-Sweater-Men-s-Knitting-Pullovers-Rollneck-Knitted-Sweater-Warm-Men-Jumper.jpg_480x480q90.jpg_.webp',
      price: 45.00,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      description: 'A stylish and comfortable hoodie for everyday wear.'
      },
      // {
      //   id: 7,
      //   category: 'women',
      //   name: 'Skirt',
      //   image: 'https://ae01.alicdn.com/kf/H31c4363c81b644219b3f2516321107038/New-Winter-Down-Jacket-Men-White-Duck-Down-Hooded-Jackets-Coats-Men-Long-Warm-Down-Jackets.jpg_480x480q90.jpg_.webp',
      //   price: 25.00,
      //   sizes: ['XS', 'S', 'M', 'L', 'XL'],
      //   description: 'A versatile and stylish skirt for any occasion.'
      //   },
    
  ];

  constructor() { }

  getClothingProducts() {
    return this.clothingProducts;
  }

  getProductById(id: number) {
    return this.clothingProducts.find(product => product.id === id);
  }

  filterByCategory(category: string) {
    if (category === 'all') {
      return this.clothingProducts;
    } else {
      return this.clothingProducts.filter(product => product.category === category);
    }
  }

}
