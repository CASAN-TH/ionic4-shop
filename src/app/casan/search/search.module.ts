import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchGeneralBrandsComponent } from './search-general-brands/search-general-brands.component';
import { SearchBrandsComponent } from './search-brands/search-brands.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchProductTypeComponent } from './search-product-type/search-product-type.component';



@NgModule({
  declarations: [
    SearchGeneralBrandsComponent,
    SearchBrandsComponent,
    SearchProductTypeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[
    SearchGeneralBrandsComponent,
    SearchBrandsComponent,
    SearchProductTypeComponent
  ]
})
export class SearchModule { }
