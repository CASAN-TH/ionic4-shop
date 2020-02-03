import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MatTabsModule } from '@angular/material/tabs';

import { CateProductListPageModule } from '../cate-product-list/cate-product-list.module';
// import { ProductListBlockPageModule } from '../product-list-block/product-list-block.module';
// import { ProductlistPageModule } from '../productlist/productlist.module';
import { CatalogModule } from '../casan/catalog/catalog.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HomePageRoutingModule,
    MatTabsModule,
    // ProductListBlockPageModule,
    CateProductListPageModule,
    // ProductlistPageModule,
    CatalogModule

  ],
  declarations: [HomePage]
})
export class HomePageModule { }
