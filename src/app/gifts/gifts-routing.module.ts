import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftsPage } from './gifts.page';
import { GiftsService } from './gifts.service';

const routes: Routes = [
  {
    path: '',
    component: GiftsPage,
    resolve: [ GiftsService ]
  },
  {
    path: ':giftId',
    component: GiftsPage,
    resolve: [ GiftsService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftsPageRoutingModule {}
