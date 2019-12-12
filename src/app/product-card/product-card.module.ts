import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCardPageRoutingModule } from './product-card-routing.module';

import { ProductCardPage } from './product-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductCardPageRoutingModule
  ],
  declarations: [ProductCardPage],
  exports:[ProductCardPage]
})
export class ProductCardPageModule {}
