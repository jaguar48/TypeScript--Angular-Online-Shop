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
