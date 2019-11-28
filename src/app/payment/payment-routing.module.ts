import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentPage } from './payment.page';
import { PaymentService } from './payment.service';

const routes: Routes = [
  {
    path: '',
    component: PaymentPage,
    resolve: [PaymentService]
  },
  {
    path: ':paymentId',
    component: PaymentPage,
    resolve: [PaymentService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPageRoutingModule { }
