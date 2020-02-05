import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TcoinPageRoutingModule } from './tcoin-routing.module';

import { TcoinPage } from './tcoin.page';
// import { ProductlistPageModule } from '../productlist/productlist.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TcoinPageRoutingModule,
    // ProductlistPageModule
  ],
  declarations: [TcoinPage]
})
export class TcoinPageModule {}
