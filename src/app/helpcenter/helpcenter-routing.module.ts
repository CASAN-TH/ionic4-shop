import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpcenterPage } from './helpcenter.page';
import { HelpcenterService } from './helpcenter.service';

const routes: Routes = [
  {
    path: '',
    component: HelpcenterPage,
    resolve: [ HelpcenterService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpcenterPageRoutingModule {}
