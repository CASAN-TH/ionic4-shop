import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycouponPageRoutingModule } from './mycoupon-routing.module';

import { MycouponPage } from './mycoupon.page';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MycouponPageRoutingModule,
    MatTabsModule,
  ],
  declarations: [MycouponPage]
})
export class MycouponPageModule {}
