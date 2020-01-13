import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillPage } from './bill.page';
import { BillService } from './bill.service';

const routes: Routes = [
  {
    path: '',
    component: BillPage,
    resolve: [ BillService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillPageRoutingModule {}
