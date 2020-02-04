import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopPageRoutingModule } from './shop-routing.module';

import { ShopPage } from './shop.page';
import { SelectcheckPageModule } from '../selectcheck/selectcheck.module';
import { FooterSelectcheckPageModule } from '../footer-selectcheck/footer-selectcheck.module';
// import { ProductlistPageModule } from '../productlist/productlist.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopPageRoutingModule,
    SelectcheckPageModule,
    FooterSelectcheckPageModule,
    // ProductlistPageModule,
    MatTabsModule
  ],
  declarations: [ShopPage]
})
export class ShopPageModule {}
