import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayforPage } from './payfor.page';
import { PayforService } from './payfor.service';

const routes: Routes = [
  {
    path: '',
    component: PayforPage,
    resolve: [ PayforService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayforPageRoutingModule {}
