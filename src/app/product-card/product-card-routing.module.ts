import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCardPage } from './product-card.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCardPageRoutingModule {}
