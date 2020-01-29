import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSlideComponent } from './product-slide/product-slide.component';
import { IonicModule } from '@ionic/angular';
import { ProductPaymentComponent } from './product-payment/product-payment.component';
import { ProductPaymentModalComponent } from './product-payment/product-payment-modal/product-payment-modal.component';
import { ProductShareComponent } from './product-share/product-share.component';
import { ProductShareModalComponent } from './product-share/product-share-modal/product-share-modal.component';
import { ProductBenefitComponent } from './product-benefit/product-benefit.component';
import { ProductGiftComponent } from './product-benefit/product-gift/product-gift.component';
import { ProductTcoinComponent } from './product-benefit/product-tcoin/product-tcoin.component';
import { ProductVoucherComponent } from './product-benefit/product-voucher/product-voucher.component';



@NgModule({
  declarations: [
    ProductSlideComponent,
    ProductPaymentComponent,
    ProductPaymentModalComponent,
    ProductShareComponent,
    ProductShareModalComponent,
    ProductBenefitComponent,
    ProductGiftComponent,
    ProductTcoinComponent,
    ProductVoucherComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    ProductSlideComponent,
    ProductPaymentComponent,
    ProductShareComponent,
    ProductBenefitComponent
  ],
  entryComponents:[
    ProductPaymentModalComponent,
    ProductShareModalComponent
  ]
})
export class ProductdetailModule { }
