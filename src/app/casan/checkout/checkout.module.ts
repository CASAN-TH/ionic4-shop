import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddressComponent } from './address/address.component';
import { CheckoutProductComponent } from './checkout-product/checkout-product.component';
import { CheckoutTotalComponent } from './checkout-total/checkout-total.component';
import { CheckoutTypeComponent } from './checkout-type/checkout-type.component';
import { NoAddressComponent } from './no-address/no-address.component';
import { CheckoutSummaryComponent } from './checkout-summary/checkout-summary.component';
import { AccountModule } from '../account/account.module';



@NgModule({
  declarations: [
    AddressComponent,
    NoAddressComponent,
    CheckoutProductComponent,
    CheckoutTotalComponent,
    CheckoutTypeComponent,
    CheckoutSummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountModule
  ],
  exports: [
    AddressComponent,
    NoAddressComponent,
    CheckoutProductComponent,
    CheckoutTotalComponent,
    CheckoutTypeComponent,
    CheckoutSummaryComponent
  ]
})
export class CheckoutModule { }
