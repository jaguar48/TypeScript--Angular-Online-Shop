import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})export class ProductDetailComponent implements OnInit {
  currentProducts: any[] = [];
  product: any;
  selectedSize = '';
  selectedProduct: any;
  clothingProducts: any[] = [];
  cart: any[] = [];
  cartTotal: any;
  selectedCategory: string = 'all';
  currentCategory: string = 'All'; 
  selectedColor = '';


  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router, ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  
    this.product = this.productService.getProductById(id);
  }
  
  addToCart() {
    if (!this.selectedSize || !this.selectedColor) {
      alert('Please select a size and color.');
      return;
    }

  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  let item = cart.find((item: { productId: any; size: string; color:string }) => item.productId === this.product.id && item.size === this.selectedSize && item.color == this.selectedColor);
  if (item) {
    item.quantity++;
  } else {
    item = {
      ...this.product,
      size: this.selectedSize,
      color: this.selectedColor,
      quantity: 1
    };
    cart.push(item);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart.');
}

selectCategory(): void {
  this.router.navigate(['home']);
}

}
