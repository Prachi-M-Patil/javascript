import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService], // Global Service
  bootstrap: [AppComponent]
})
export class AppModule { }
