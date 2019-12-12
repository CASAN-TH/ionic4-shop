import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductlistPage } from 'src/app/productlist/productlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,

    MatTabsModule
  ],
  declarations: [SearchPage, ProductlistPage]
})
export class SearchPageModule { }
