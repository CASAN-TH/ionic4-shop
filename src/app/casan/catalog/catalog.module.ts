import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListBlockComponent } from './product-list-block/product-list-block.component';
import { IonicModule } from '@ionic/angular';
import { ProductCardComponent } from './product-card/product-card.component';
import { CatalogSlideNavComponent } from './catalog-slide-nav/catalog-slide-nav.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductListBlockComponent,
    ProductCardComponent,
    CatalogSlideNavComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProductListComponent,
    ProductListBlockComponent,
    CatalogSlideNavComponent,
    CategoriesComponent
  ]
})
export class CatalogModule { }
