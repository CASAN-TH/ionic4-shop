import { PaymentAmountComponent } from './payment-amount/payment-amount.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    PaymentAmountComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PaymentAmountComponent
  ]
})
export class PaymentModule { }
