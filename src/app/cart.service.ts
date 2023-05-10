import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  constructor() {
    
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  getCart(): any[] {
    return this.cart;
  }

  addToCart(item: any): void {
    const existingItemIndex = this.cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      
      this.cart[existingItemIndex].quantity++;
    } else {
      
      this.cart.push({...item, quantity: 1});
    }
    this.saveCart();
  }

  removeFromCart(item: any): void {
    const index = this.cart.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.saveCart();
    }
  }

  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
      this.saveCart();
    }
  }

  increaseQuantity(item: any): void {
    item.quantity++;
    this.saveCart();
  }

  checkout(): void {
  
  }

  public saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }  
}
