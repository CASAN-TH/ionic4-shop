import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalCardComponent } from './pages/regcredit/modals/modal-card/modal-card.component';
// import { PaymentModalComponent } from './productdetail/payment-modal/payment-modal.component';
// import { VouchersModalComponent } from './productdetail/vouchers-modal/vouchers-modal.component';
// import { PromotionModalComponent } from './productdetail/promotion-modal/promotion-modal.component';
// import { TcoinModalComponent } from './productdetail/tcoin-modal/tcoin-modal.component';
// import { WarrantyModalComponent } from './productdetail/warranty-modal/warranty-modal.component';
// import { SpecificationModalComponent } from './productdetail/specification-modal/specification-modal.component';
// import { ReviewModalComponent } from './productdetail/review-modal/review-modal.component';
// import { ImformationspecModalComponent } from './productdetail/imformationspec-modal/imformationspec-modal.component';


import { ModalCameraComponent } from './modals/modal-camera/modal-camera.component';
import { PaymentgiftModalComponent } from './gifts/paymentgift-modal/paymentgift-modal.component';
import { TcoingiftModalComponent } from './gifts/tcoingift-modal/tcoingift-modal.component';
import { WarrantygiftModalComponent } from './gifts/warrantygift-modal/warrantygift-modal.component';
import { SpecificationgiftModalComponent } from './gifts/specificationgift-modal/specificationgift-modal.component';
import { ImformationspecgiftModalComponent } from './gifts/imformationspecgift-modal/imformationspecgift-modal.component';
import { ModalCreditPointComponent } from './credit/modal-credit-point/modal-credit-point.component';
import { ModalContactComponent } from './credit/modal-contact/modal-contact.component';
import { ModalMarriageComponent } from './credit/modal-marriage/modal-marriage.component';
import { ModalSecondcontactComponent } from './credit/modal-secondcontact/modal-secondcontact.component';
import { ModalAssetdocsComponent } from './credit/modal-assetdocs/modal-assetdocs.component';
import { ModalJobComponent } from './credit/modal-job/modal-job.component';
import { SelectdownModalComponent } from './casan/checkout/checkout-type/selectdown-modal/selectdown-modal.component';
import { ModalAssetdocsDetailComponent } from './credit/modal-assetdocs-detail/modal-assetdocs-detail.component';
import { ModalFeedbackComponent } from './setting/modal-feedback/modal-feedback.component';
import { ModalAboutComponent } from './setting/modal-about/modal-about.component';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { TranslateModule } from '@ngx-translate/core';
import { ModalMyorderComponent } from './account/modal-myorder/modal-myorder.component';
import { ModalLanguageComponent } from './account/modal-language/modal-language.component';
import { PaymentHistoryComponent } from './bill/payment-history/payment-history.component';
import { PaybackHistoryComponent } from './bill/payback-history/payback-history.component';
import { PaymentProductDetailComponent } from './bill/payment-product-detail/payment-product-detail.component';
import { PaynowComponent } from './bill/paynow/paynow.component';
import { BillPaymentComponent } from './bill/bill-payment/bill-payment.component';
import { AcceptModalComponent } from './casan/checkout/checkout-total/accept-modal/accept-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalTcoinDetailComponent } from './tcoin/modal-tcoin-detail/modal-tcoin-detail.component';
import { SearchModalComponent } from './home/search-modal/search-modal.component';
import { ModalCouponCenterComponent } from './mycoupon/modal-coupon-center/modal-coupon-center.component';
import { ModalFavoriteComponent } from './account/modal-favorite/modal-favorite.component';
import { ModalFollowedshopComponent } from './account/modal-followedshop/modal-followedshop.component';
import { ModalBrowsehistoryComponent } from './account/modal-browsehistory/modal-browsehistory.component';
import { PopoverSelectComponent } from 'src/app/casan/account/order-summary/popover-select/popover-select.component';



@NgModule({
  declarations: [AppComponent,
    ModalCardComponent,
    ModalCameraComponent,
    SelectdownModalComponent,
    AcceptModalComponent,

    PaymentgiftModalComponent,

    ModalFeedbackComponent,
    ModalAboutComponent,
    ModalMyorderComponent,
    ModalLanguageComponent,
    PopoverSelectComponent,

    ModalTcoinDetailComponent,
    ModalCouponCenterComponent,
    PopoverSelectComponent,
    ModalFavoriteComponent,
    ModalFollowedshopComponent,
    ModalBrowsehistoryComponent,

    PaymentgiftModalComponent,
    TcoingiftModalComponent,
    WarrantygiftModalComponent,
    SpecificationgiftModalComponent,
    ImformationspecgiftModalComponent,

    ModalCreditPointComponent,
    ModalContactComponent,
    ModalMarriageComponent,
    ModalSecondcontactComponent,
    ModalAssetdocsComponent,
    ModalAssetdocsDetailComponent,
    ModalJobComponent,

    PaymentHistoryComponent,
    PaybackHistoryComponent,
    PaymentProductDetailComponent,
    PaynowComponent,
    BillPaymentComponent,

    SearchModalComponent


  ],
  entryComponents: [
    ModalCardComponent,
    ModalCameraComponent,

    SelectdownModalComponent,
    AcceptModalComponent,

    ModalFeedbackComponent,
    ModalAboutComponent,
    ModalMyorderComponent,
    ModalLanguageComponent,
    PopoverSelectComponent,

    ModalTcoinDetailComponent,
    ModalCouponCenterComponent,
    PopoverSelectComponent,
    ModalFavoriteComponent,
    ModalFollowedshopComponent,
    ModalBrowsehistoryComponent,

    PaymentgiftModalComponent,
    TcoingiftModalComponent,
    WarrantygiftModalComponent,
    SpecificationgiftModalComponent,
    ImformationspecgiftModalComponent,

    ModalCreditPointComponent,
    ModalContactComponent,
    ModalMarriageComponent,
    ModalSecondcontactComponent,
    ModalAssetdocsComponent,
    ModalAssetdocsDetailComponent,
    ModalJobComponent,

    PaymentHistoryComponent,
    PaybackHistoryComponent,
    PaymentProductDetailComponent,
    PaynowComponent,
    BillPaymentComponent,

    SearchModalComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatDialogModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CameraPreview,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
