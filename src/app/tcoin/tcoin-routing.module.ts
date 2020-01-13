import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TcoinPage } from './tcoin.page';
import { TcoinService } from './tcoin.service';

const routes: Routes = [
  {
    path: '',
    component: TcoinPage,
    resolve: [ TcoinService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TcoinPageRoutingModule {}
