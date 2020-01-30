import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartEmptyComponent } from './cart-empty/cart-empty.component';
import { IonicModule } from '@ionic/angular';
import { CartByShopComponent } from './cart-by-shop/cart-by-shop.component';
import { CartByShopitemComponent } from './cart-by-shopitem/cart-by-shopitem.component';
import { TotalcartComponent } from './totalcart/totalcart.component';



@NgModule({
  declarations: [
    CartEmptyComponent,
    CartByShopComponent,
    CartByShopitemComponent,
    TotalcartComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CartEmptyComponent,
    CartByShopComponent,
    CartByShopitemComponent,
    TotalcartComponent
  ]
})
export class CartModule { }
