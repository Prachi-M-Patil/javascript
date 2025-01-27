<div class="container">
  <div class="food-list">
    <h2>Available Food Items</h2>
    <div *ngFor="let item of foodItems" class="food-item">
      <p>{{ item.name }} - ₹{{ item.price }}</p>
      <button (click)="addToCart(item)">Add to Cart</button>
    </div>
  </div>

  <div class="cart">
    <h2>Your Cart</h2>
    <div *ngFor="let item of cartItems" class="cart-item">
      <p>{{ item.name }} - ₹{{ item.price }}</p>
      <button (click)="removeFromCart(item)">Remove</button>
    </div>
    <div *ngIf="cartItems.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <h3 *ngIf="cartItems.length > 0">Total Price: ₹{{ totalPrice }}</h3>
  </div>
</div>
