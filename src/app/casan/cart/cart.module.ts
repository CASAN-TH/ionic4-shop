import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartEmptyComponent } from './cart-empty/cart-empty.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CartEmptyComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CartEmptyComponent
  ]
})
export class CartModule { }
