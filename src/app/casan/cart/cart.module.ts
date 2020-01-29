import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartEmptyComponent } from './cart-empty/cart-empty.component';
import { IonicModule } from '@ionic/angular';
import { CartByShopComponent } from './cart-by-shop/cart-by-shop.component';



@NgModule({
  declarations: [
    CartEmptyComponent,
    CartByShopComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CartEmptyComponent,
    CartByShopComponent
  ]
})
export class CartModule { }
