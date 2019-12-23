import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchHistoryPage } from './search-history.page';

const routes: Routes = [
  {
    path: '',
    component: SearchHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchHistoryPageRoutingModule {}
