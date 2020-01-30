import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductdetailPageRoutingModule } from './productdetail-routing.module';

import { ProductdetailPage } from './productdetail.page';
import { ProductlistPageModule } from '../productlist/productlist.module';
import { FooterPageModule } from '../footer/footer.module';
import { ProductdetailModule } from '../casan/productdetail/productdetail.module';
import { CatalogModule } from '../casan/catalog/catalog.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductdetailPageRoutingModule,
    ProductlistPageModule,
    FooterPageModule,

    ProductdetailModule,
    CatalogModule
  ],
  declarations: [ProductdetailPage]
})
export class ProductdetailPageModule { }
