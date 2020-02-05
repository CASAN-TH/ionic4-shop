import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayforPageRoutingModule } from './payfor-routing.module';

import { PayforPage } from './payfor.page';
import { PaymentModule } from '../casan/payment/payment.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentModule,
    PayforPageRoutingModule
  ],
  declarations: [PayforPage]
})
export class PayforPageModule {}
