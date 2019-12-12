import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CateProductListPageRoutingModule } from './cate-product-list-routing.module';

import { CateProductListPage } from './cate-product-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CateProductListPageRoutingModule,
    
  ],
  declarations: [CateProductListPage],
  exports: [CateProductListPage]
})
export class CateProductListPageModule {}
