import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { CateProductListPageModule } from '../cate-product-list/cate-product-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    HomePageRoutingModule,
    CateProductListPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
