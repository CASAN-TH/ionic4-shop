import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchproductPage } from './searchproduct.page';
import { SearchproductService } from './searchproduct.service';

const routes: Routes = [
  {
    path: '',
    component: SearchproductPage,
    resolve: [ SearchproductService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchproductPageRoutingModule {}
