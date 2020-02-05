import { PaymentAmountComponent } from './payment-amount/payment-amount.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PaymentMethodRecommentComponent } from './payment-method-recomment/payment-method-recomment.component';



@NgModule({
  declarations: [
    PaymentAmountComponent,
    PaymentMethodRecommentComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PaymentAmountComponent
  ],
  entryComponents: [
    PaymentMethodRecommentComponent
  ]
})
export class PaymentModule { }
