import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CateProductListPage } from './cate-product-list.page';

const routes: Routes = [
  {
    path: '',
    component: CateProductListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CateProductListPageRoutingModule {}
