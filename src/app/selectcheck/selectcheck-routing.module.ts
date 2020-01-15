import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectcheckPage } from './selectcheck.page';

const routes: Routes = [
  {
    path: '',
    component: SelectcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectcheckPageRoutingModule {}
