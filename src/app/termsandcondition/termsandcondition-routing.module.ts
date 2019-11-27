import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsandconditionPage } from './termsandcondition.page';
import { TermsandconditionService } from './termsandcondition.service';

const routes: Routes = [
  {
    path: '',
    component: TermsandconditionPage,
    resolve: [ TermsandconditionService ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsandconditionPageRoutingModule {}
