import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
import { PromotionModule } from '../casan/promotion/promotion.module';
import { CatalogModule } from '../casan/catalog/catalog.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    // PromotionModule
    CatalogModule
  ],
  declarations: [CategoryPage]
})
export class CategoryPageModule {}
