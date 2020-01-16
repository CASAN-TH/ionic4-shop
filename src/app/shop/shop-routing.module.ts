import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopPage } from './shop.page';
import { ShopService } from './shop.service';

const routes: Routes = [
  {
    path: '',
    component: ShopPage,
    resolve: [ ShopService ]
  },
  {
    path: ':shopId',
    component: ShopPage,
    resolve: [ ShopService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopPageRoutingModule {}
