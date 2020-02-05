import { PaymentAmountComponent } from './payment-amount/payment-amount.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PaymentMethodRecommentComponent } from './payment-method-recomment/payment-method-recomment.component';
import { CounterServiceListComponent } from './counter-service-list/counter-service-list.component';
import { BillModalComponent } from './counter-service-list/bill-modal/bill-modal.component';



@NgModule({
  declarations: [
    PaymentAmountComponent,
    PaymentMethodRecommentComponent,
    CounterServiceListComponent,
    BillModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PaymentAmountComponent
  ],
  entryComponents: [
    PaymentMethodRecommentComponent,
    CounterServiceListComponent,
    BillModalComponent
  ]
})
export class PaymentModule { }
