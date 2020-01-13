import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallcenterPage } from './callcenter.page';
import { CallcenterService } from './callcenter.service';

const routes: Routes = [
  {
    path: '',
    component: CallcenterPage,
    resolve: [ CallcenterService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallcenterPageRoutingModule {}
