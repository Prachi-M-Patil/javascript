import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedProduct: any;

  onProductAdded(product: any) {
    this.selectedProduct = product;  // Pass product to CartComponent
  }
}
