import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycouponPage } from './mycoupon.page';
import { MycouponService } from './mycoupon.service';

const routes: Routes = [
  {
    path: '',
    component: MycouponPage,
    resolve: [ MycouponService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MycouponPageRoutingModule {}
