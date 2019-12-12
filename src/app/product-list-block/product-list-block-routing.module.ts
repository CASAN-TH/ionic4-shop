import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListBlockPage } from './product-list-block.page';

const routes: Routes = [
  {
    path: '',
    component: ProductListBlockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductListBlockPageRoutingModule {}
