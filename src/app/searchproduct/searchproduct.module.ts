import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchproductPageRoutingModule } from './searchproduct-routing.module';

import { SearchproductPage } from './searchproduct.page';
import { SelectcheckPageModule } from '../selectcheck/selectcheck.module';
import { FooterSelectcheckPageModule } from '../footer-selectcheck/footer-selectcheck.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchproductPageRoutingModule,
    SelectcheckPageModule,
    FooterSelectcheckPageModule
  ],
  declarations: [SearchproductPage]
})
export class SearchproductPageModule {}
