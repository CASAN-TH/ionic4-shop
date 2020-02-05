import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftsPageRoutingModule } from './gifts-routing.module';

import { GiftsPage } from './gifts.page';
// import { ProductlistPageModule } from '../productlist/productlist.module';
import { FooterPageModule } from '../footer/footer.module';
import { CatalogModule } from '../casan/catalog/catalog.module';
import { ProductdetailModule } from '../casan/productdetail/productdetail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftsPageRoutingModule,
    // ProductlistPageModule,
    FooterPageModule,
    ProductdetailModule,
    CatalogModule
  ],
  declarations: [GiftsPage]
})
export class GiftsPageModule { }
