import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { PaystackOptions } from 'angular4-paystack';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedProduct: any;
  currentProducts: any[] = [];
  clothingProducts: any[] = [];
  cart: any[] = [];
  selectedCategory: string = 'all';
  showCartDropdown = false;
  title:string ="";
  reference: string = '' + Math.floor(Math.random() * 1000000000 + 1);
  currentCategory: string = 'All'; 
  selectedCurrency: string = 'NGN';
  currencySymbol: string = '₦'; 
  currencyRate: number = 1; 
  selectedColor = '';
  selectedSize = '';
  cartTotal: any;
  
  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.clothingProducts = this.productService.getClothingProducts();
    this.currentProducts = this.clothingProducts;
    this.cart = this.cartService.getCart();
    console.log('cart items', this.cart);
  }

  selectProduct(product: any): void {
    this.router.navigate(['/products', product.id]);
  }

  filterByCategory(category: string): void {
    this.currentProducts = this.productService.filterByCategory(category);
    this.currentCategory = category; 
    this.selectedCategory = category;
  }

  selectCategory(category: string): void {
    this.filterByCategory(category);
  }

  goToCart(): void {
    this.showCartDropdown = !this.showCartDropdown;
  }

  decreaseQuantity(item: any): void {
    this.cartService.decreaseQuantity(item);
  }

  increaseQuantity(item: any): void {
    this.cartService.increaseQuantity(item);
  }

  checkout(): void {
    this.cartTotal = this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    this.Options.amount = this.cartTotal * 100; 
  }

  Options: PaystackOptions = {
    email: 'customer@example.com',
    amount: 0, 
    currency: 'NGN',
    ref: '' + Math.floor(Math.random() * 1000000000 + 1),
  };

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log(this.title, ref);
  }

  paymentCancel() {
    console.log('payment failed');
  }
  updateCurrency(event: any) {
    const value = event.target.value;
    if (value === 'USD') {
      this.currencySymbol = '$';
      this.currencyRate = 1;
    } else if (value === 'EUR') {
      this.currencySymbol = '€';
      this.currencyRate = 0.85;
    } else if (value === 'JPY') {
      this.currencySymbol = '¥';
      this.currencyRate = 110.92;
    } else {
      this.currencySymbol = '₦';
      this.currencyRate = 1;
    }
   
    this.currentProducts.forEach(product => {
      product.price *= this.currencyRate;
    });
    
    this.cart.forEach(item => {
      item.price *= this.currencyRate;
    });
  }

  viewCart(){
    this.router.navigate(['cart']);
  }
  
  }