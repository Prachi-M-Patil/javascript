import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProductModule,  // Import Product Module
    CartModule      // Import Cart Module
  ],
  providers: [ProductService], // Global Service
  bootstrap: [AppComponent]
})
export class AppModule { }
