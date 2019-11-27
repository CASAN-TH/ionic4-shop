import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddaddressPage } from './addaddress.page';
import { AddaddressService } from './addaddress.service';

const routes: Routes = [
  {
    path: '',
    component: AddaddressPage,
    resolve: [ AddaddressService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddaddressPageRoutingModule {}
