import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayforPageRoutingModule } from './payfor-routing.module';

import { PayforPage } from './payfor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayforPageRoutingModule
  ],
  declarations: [PayforPage]
})
export class PayforPageModule {}
