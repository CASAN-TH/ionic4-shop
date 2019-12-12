import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListBlockPageRoutingModule } from './product-list-block-routing.module';

import { ProductListBlockPage } from './product-list-block.page';
import { ProductCardPageModule } from '../product-card/product-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListBlockPageRoutingModule,
    ProductCardPageModule
  ],
  declarations: [ProductListBlockPage],
  exports: [ProductListBlockPage]
})
export class ProductListBlockPageModule {}
