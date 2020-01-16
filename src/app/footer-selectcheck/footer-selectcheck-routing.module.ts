import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterSelectcheckPage } from './footer-selectcheck.page';

const routes: Routes = [
  {
    path: '',
    component: FooterSelectcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterSelectcheckPageRoutingModule {}
