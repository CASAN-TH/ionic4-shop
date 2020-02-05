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
import { OnlineBankListComponent } from './online-bank-list/online-bank-list.component';
import { CreditBankListComponent } from './credit-bank-list/credit-bank-list.component';
import { BankModalComponent } from './credit-bank-list/bank-modal/bank-modal.component';
import { PaymentMethodListComponent } from './payment-method-list/payment-method-list.component';



@NgModule({
  declarations: [
    PaymentAmountComponent,
    PaymentMethodListComponent,
    PaymentMethodRecommentComponent,
    CounterServiceListComponent,
    BillModalComponent,
    AtmBankListComponent,
    AtmBillModalComponent,
    OnlineBankListComponent,
    CreditBankListComponent,
    BankModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    PaymentAmountComponent,
    PaymentMethodListComponent
  ],
  entryComponents: [
    PaymentMethodRecommentComponent,
    CounterServiceListComponent,
    BillModalComponent,
    AtmBankListComponent,
    AtmBillModalComponent,
    OnlineBankListComponent,
    CreditBankListComponent,
    BankModalComponent
  ]
})
export class PaymentModule { }
