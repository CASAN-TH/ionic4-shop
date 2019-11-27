import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MePage } from './me.page';
import { MeService } from './me.service';

const routes: Routes = [
  {
    path: '',
    component: MePage,
    resolve: [ MeService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MePageRoutingModule {}
