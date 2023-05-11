import { CartService } from '../cart.service';
import { Component, OnInit } from '@angular/core';
import { PaystackOptions } from 'angular4-paystack';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  selectedProduct: any;
  currentProducts: any[] = [];
  clothingProducts: any[] = [];
  cartTotal: any;
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
  taxAmount: any;
  totalAmount:any;

  constructor(private cartService: CartService,private router: Router, ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cartTotal = this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    this.taxAmount = this.cartTotal * 0.21; 
    this.totalAmount = this.cartTotal + this.taxAmount; 
  }

  selectCategory(): void {
    this.router.navigate(['home']);
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
    this.Options.amount = this.totalAmount * 100; 
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
  viewCart(){
    this.router.navigate(['cart']);
  }
}