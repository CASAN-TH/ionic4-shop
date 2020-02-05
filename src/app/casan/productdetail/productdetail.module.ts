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
import { ProductGiftModalComponent } from './product-benefit/product-gift/product-gift-modal/product-gift-modal.component';
import { ProductTcoinModalComponent } from './product-benefit/product-tcoin/product-tcoin-modal/product-tcoin-modal.component';
import { ProductVoucherModalComponent } from './product-benefit/product-voucher/product-voucher-modal/product-voucher-modal.component';
import { ProductServiceComponent } from './product-service/product-service.component';
import { ProductServiceModalComponent } from './product-service/product-service-modal/product-service-modal.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { ProductSpecModalComponent } from './product-spec/product-spec-modal/product-spec-modal.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ProductReviewsModalComponent } from './product-reviews/product-reviews-modal/product-reviews-modal.component';
import { ProductImformationSpecComponent } from './product-imformation-spec/product-imformation-spec.component';
import { ProductImformationSpecModalComponent } from './product-imformation-spec/product-imformation-spec-modal/product-imformation-spec-modal.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductWarrantyComponent } from './product-warranty/product-warranty.component';
import { ProductMenuModalComponent } from './product-menu-modal/product-menu-modal.component';



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
    ProductVoucherComponent,
    ProductGiftModalComponent,
    ProductTcoinModalComponent,
    ProductVoucherModalComponent,
    ProductServiceComponent,
    ProductServiceModalComponent,
    ProductSpecComponent,
    ProductSpecModalComponent,
    ProductReviewsComponent,
    ProductReviewsModalComponent,
    ProductImformationSpecComponent,
    ProductImformationSpecModalComponent,
    ProductDetailComponent,
    ProductWarrantyComponent,
    ProductMenuModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProductSlideComponent,
    ProductPaymentComponent,
    ProductShareComponent,
    ProductBenefitComponent,
    ProductServiceComponent,
    ProductSpecComponent,
    ProductReviewsComponent,
    ProductImformationSpecComponent,
    ProductDetailComponent,
    ProductWarrantyComponent,
    ProductMenuModalComponent
  ],
  entryComponents: [
    ProductPaymentModalComponent,
    ProductShareModalComponent,
    ProductGiftModalComponent,
    ProductTcoinModalComponent,
    ProductVoucherModalComponent,
    ProductServiceModalComponent,
    ProductSpecModalComponent,
    ProductReviewsModalComponent,
    ProductImformationSpecModalComponent,
    ProductMenuModalComponent
  ]
})
export class ProductdetailModule { }
