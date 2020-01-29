import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSlideComponent } from './product-slide/product-slide.component';
import { IonicModule } from '@ionic/angular';
import { ProductPaymentComponent } from './product-payment/product-payment.component';
import { ProductPaymentModalComponent } from './product-payment/product-payment-modal/product-payment-modal.component';
import { ProductShareComponent } from './product-share/product-share.component';



@NgModule({
  declarations: [
    ProductSlideComponent,
    ProductPaymentComponent,
    ProductPaymentModalComponent,
    ProductShareComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    ProductSlideComponent,
    ProductPaymentComponent,
    ProductShareComponent
  ],
  entryComponents:[
    ProductPaymentModalComponent
  ]
})
export class ProductdetailModule { }
