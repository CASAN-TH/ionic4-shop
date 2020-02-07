import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListBlockComponent } from './product-list-block/product-list-block.component';
import { IonicModule } from '@ionic/angular';
import { ProductCardComponent } from './product-card/product-card.component';
import { CatalogSlideNavComponent } from './catalog-slide-nav/catalog-slide-nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductGeneralReccommentComponent } from './product-general-reccomment/product-general-reccomment.component';
import { CataProductListComponent } from './cata-product-list/cata-product-list.component';
import { MenuGeneralSelectCheckComponent } from './menu-general-select-check/menu-general-select-check.component';
import { MenuSelectCheckComponent } from './menu-select-check/menu-select-check.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductListBlockComponent,
    ProductCardComponent,
    CatalogSlideNavComponent,
    CategoriesComponent,
    ProductGeneralReccommentComponent,
    CataProductListComponent,
    MenuGeneralSelectCheckComponent,
    MenuSelectCheckComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProductListComponent,
    ProductListBlockComponent,
    CatalogSlideNavComponent,
    CategoriesComponent,
    ProductGeneralReccommentComponent,
    CataProductListComponent,
    MenuGeneralSelectCheckComponent,
    MenuSelectCheckComponent
  ]
})
export class CatalogModule { }
