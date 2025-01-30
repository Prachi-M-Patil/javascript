import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[];

  @Output() productAdded = new EventEmitter<any>();  // Sends selected product to parent

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  addToCart(product: any) {
    this.productAdded.emit(product);  // Emit event to AppComponent
  }
}

