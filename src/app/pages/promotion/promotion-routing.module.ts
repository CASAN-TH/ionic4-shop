import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromotionPage } from './promotion.page';
import { PromotionService } from './promotion.service';

const routes: Routes = [
  {
    path: '',
    component: PromotionPage,
    resolve: [PromotionService]
  },
  {
    path: ':coverId',
    component: PromotionPage,
    resolve: [PromotionService]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionPageRoutingModule { }
