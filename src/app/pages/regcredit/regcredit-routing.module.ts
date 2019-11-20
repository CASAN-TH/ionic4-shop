import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegcreditPage } from './regcredit.page';
import { RegcreditService } from './regcredit.service';

const routes: Routes = [
  {
    path: '',
    component: RegcreditPage,
    resolve: [ RegcreditService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegcreditPageRoutingModule {}
