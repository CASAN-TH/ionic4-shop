import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductListBlockComponent } from './product-list-block/product-list-block.component';
import { IonicModule } from '@ionic/angular';
// import { ProductCardComponent } from './product-card/product-card.component';
import { CatalogSlideNavComponent } from './catalog-slide-nav/catalog-slide-nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductGeneralReccommentComponent } from './product-general-reccomment/product-general-reccomment.component';
import { CataProductListComponent } from './cata-product-list/cata-product-list.component';
import { MenuGeneralSelectCheckComponent } from './menu-general-select-check/menu-general-select-check.component';
// import { MenuSelectCheckComponent } from './menu-select-check/menu-select-check.component';
// import { ProductListComponent } from './cata-product-list/product-list/product-list.component';
import { ProductListBlockComponent } from './cata-product-list/product-list-block/product-list-block.component';
import { ProductCardComponent } from './cata-product-list/product-card/product-card.component';
import { ProductListComponent } from './product-general-reccomment/product-list/product-list.component';
import { MenuSelectCheckComponent } from './menu-general-select-check/menu-select-check/menu-select-check.component';



@NgModule({
  declarations: [
    ProductListComponent,
    // ProductListComponent,
    ProductListBlockComponent,
    ProductCardComponent,
    // ProductListComponent,
    // ProductListBlockComponent,
    // ProductCardComponent,
    CatalogSlideNavComponent,
    CategoriesComponent,
    ProductGeneralReccommentComponent,
    CataProductListComponent,
    MenuGeneralSelectCheckComponent,
    MenuSelectCheckComponent
    // MenuSelectCheckComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProductListComponent,
    ProductListBlockComponent,
    // ProductListComponent,
    // ProductListBlockComponent,
    CatalogSlideNavComponent,
    CategoriesComponent,
    ProductGeneralReccommentComponent,
    CataProductListComponent,
    MenuGeneralSelectCheckComponent,
    MenuSelectCheckComponent
    // MenuSelectCheckComponent
  ]
})
export class CatalogModule { }
