import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditPage } from './credit.page';
import { CreditService } from './credit.service';

const routes: Routes = [
  {
    path: '',
    component: CreditPage,
    resolve: [ CreditService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditPageRoutingModule {}
