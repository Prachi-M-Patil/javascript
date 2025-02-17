import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  template: `
    <div class="product-item">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <button (click)="addToCart()">Add to Cart</button>
    </div>
  `
})
export class ProductItemComponent {
  @Input() product: { name: string, description: string };
  @Output() productAdded = new EventEmitter<string>();

  addToCart() {
    this.productAdded.emit(this.product.name);
  }
}


import { Component } from '@angular/core';

@Component({
  selector: 'app-product-catalog',
  template: `
    <div class="product-catalog">
      <app-product-item
        *ngFor="let product of products"
        [product]="product"
        (productAdded)="onProductAdded($event)">
      </app-product-item>
    </div>
  `
})
export class ProductCatalogComponent {
  products = [
    { name: 'Product 1', description: 'Description of Product 1' },
    { name: 'Product 2', description: 'Description of Product 2' },
    { name: 'Product 3', description: 'Description of Product 3' }
  ];

  onProductAdded(productName: string) {
    console.log(`${productName} added to cart`);
  }
}
