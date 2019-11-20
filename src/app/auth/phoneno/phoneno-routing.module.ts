import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhonenoPage } from './phoneno.page';

const routes: Routes = [
  {
    path: '',
    component: PhonenoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhonenoPageRoutingModule {}
