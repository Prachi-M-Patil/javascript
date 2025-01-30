import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartService } from '../../services/cart.service';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule],
  providers: [CartService],  // Component-Specific Service
  exports: [CartComponent]  // Export to use in `app.module.ts`
})
export class CartModule { }
