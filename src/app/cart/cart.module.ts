import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { ProductlistPageModule } from '../productlist/productlist.module';
import { CartModule } from '../casan/cart/cart.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    CartModule,
    ProductlistPageModule
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
