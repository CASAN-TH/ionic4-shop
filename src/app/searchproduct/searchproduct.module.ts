import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchproductPageRoutingModule } from './searchproduct-routing.module';

import { SearchproductPage } from './searchproduct.page';
// import { SelectcheckPageModule } from '../selectcheck/selectcheck.module';
import { FooterSelectcheckPageModule } from '../footer-selectcheck/footer-selectcheck.module';
// import { ProductlistPageModule } from '../productlist/productlist.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchproductPageRoutingModule,
    // SelectcheckPageModule,
    FooterSelectcheckPageModule,
    // ProductlistPageModule,
    MatTabsModule,
  ],
  declarations: [SearchproductPage]
})
export class SearchproductPageModule {}
