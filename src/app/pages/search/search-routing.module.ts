import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';
import { SearchService } from './search.service';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
    resolve: [ SearchService ]
  },
  {
    path: ':categoryId/:brandId',
    component: SearchPage,
    resolve: [ SearchService ]
  },
  {
    path: ':cate2Id',
    component: SearchPage,
    resolve: [ SearchService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
