import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentamountPage } from './currentamount.page';
import { CurrentamountService } from './currentamount.service';

const routes: Routes = [
  {
    path: '',
    component: CurrentamountPage,
    resolve: [ CurrentamountService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentamountPageRoutingModule {}
