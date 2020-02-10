import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchGeneralBrandsComponent } from './search-general-brands/search-general-brands.component';
// import { SearchBrandsComponent } from './search-brands/search-brands.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import { SearchProductTypeComponent } from './search-product-type/search-product-type.component';
// import { SearchProductTabComponent } from './search-product-tab/search-product-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CatalogModule } from '../catalog/catalog.module';
import { SearchBrandsComponent } from './search-general-brands/search-brands/search-brands.component';
import { SearchProductTabComponent } from './search-general-brands/search-product-tab/search-product-tab.component';
import { SearchProductTypeComponent } from './search-general-brands/search-product-type/search-product-type.component';



@NgModule({
  declarations: [
    SearchGeneralBrandsComponent,
    SearchBrandsComponent,
    SearchProductTabComponent,
    SearchProductTypeComponent
    // SearchBrandsComponent,
    // SearchProductTypeComponent,
    // SearchProductTabComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTabsModule,
    CatalogModule
  ],
  exports: [
    SearchGeneralBrandsComponent,
    SearchBrandsComponent,
    SearchProductTabComponent,
    SearchProductTypeComponent
    // SearchBrandsComponent,
    // SearchProductTypeComponent,
    // SearchProductTabComponent
  ]
})
export class SearchModule { }
