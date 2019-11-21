import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductdetailPage } from './productdetail.page';
import { ProductdetailService } from './productdetail.service';

const routes: Routes = [
  {
    path: '',
    component: ProductdetailPage,
    resolve: [ ProductdetailService ]
  },
  {
    path: ':productId',
    component: ProductdetailPage,
    resolve: [ ProductdetailService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductdetailPageRoutingModule {}
