import { Component, Input, OnChanges } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]  // Component-Specific Service
})
export class CartComponent implements OnChanges {
  cartItems: any[] = [];

  @Input() newProduct: any;  // Receives product from AppComponent

  constructor(private cartService: CartService) {}

  ngOnChanges() {
    if (this.newProduct) {
      this.cartService.addToCart(this.newProduct);
      this.cartItems = this.cartService.getCartItems();
    }
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCartItems();
  }
}
