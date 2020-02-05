import { PaymentAmountComponent } from './payment-amount/payment-amount.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PaymentMethodRecommentComponent } from './payment-method-recomment/payment-method-recomment.component';
import { CounterServiceListComponent } from './counter-service-list/counter-service-list.component';
import { BillModalComponent } from './counter-service-list/bill-modal/bill-modal.component';
import { AtmBankListComponent } from './atm-bank-list/atm-bank-list.component';
import { AtmBillModalComponent } from './atm-bank-list/atm-bill-modal/atm-bill-modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaymentAmountComponent,
    PaymentMethodRecommentComponent,
    CounterServiceListComponent,
    BillModalComponent,
    AtmBankListComponent,
    AtmBillModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    PaymentAmountComponent
  ],
  entryComponents: [
    PaymentMethodRecommentComponent,
    CounterServiceListComponent,
    BillModalComponent,
    AtmBankListComponent,
    AtmBillModalComponent
  ]
})
export class PaymentModule { }
