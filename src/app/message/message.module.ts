import { ProductlistPageModule } from './../productlist/productlist.module';
import { ProductdetailPageModule } from './../productdetail/productdetail.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagePageRoutingModule } from './message-routing.module';

import { MessagePage } from './message.page';
import { ProductlistPage } from '../productlist/productlist.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductlistPageModule,
    MessagePageRoutingModule
  ],
  declarations: [MessagePage],
  entryComponents: [ProductlistPage]
})
export class MessagePageModule {}
