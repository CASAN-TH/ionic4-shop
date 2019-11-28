import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalCardComponent } from './pages/regcredit/modals/modal-card/modal-card.component';
import { PaymentModalComponent } from './productdetail/payment-modal/payment-modal.component';
import { VouchersModalComponent } from './productdetail/vouchers-modal/vouchers-modal.component';
import { PromotionModalComponent } from './productdetail/promotion-modal/promotion-modal.component';
import { TcoinModalComponent } from './productdetail/tcoin-modal/tcoin-modal.component';
import { WarrantyModalComponent } from './productdetail/warranty-modal/warranty-modal.component';
import { SpecificationModalComponent } from './productdetail/specification-modal/specification-modal.component';
import { ReviewModalComponent } from './productdetail/review-modal/review-modal.component';
import { ImformationspecModalComponent } from './productdetail/imformationspec-modal/imformationspec-modal.component';

import { SpecModalComponent } from './cart/spec-modal/spec-modal.component';
import { InsallmentModalComponent } from './cart/insallment-modal/insallment-modal.component';
import { ModalCameraComponent } from './modals/modal-camera/modal-camera.component';
import { PaymentgiftModalComponent } from './gifts/paymentgift-modal/paymentgift-modal.component';
import { TcoingiftModalComponent } from './gifts/tcoingift-modal/tcoingift-modal.component';
import { WarrantygiftModalComponent } from './gifts/warrantygift-modal/warrantygift-modal.component';
import { SpecificationgiftModalComponent } from './gifts/specificationgift-modal/specificationgift-modal.component';
import { ImformationspecgiftModalComponent } from './gifts/imformationspecgift-modal/imformationspecgift-modal.component';
import { ModalNicknameComponent } from './pages/me/modal-nickname/modal-nickname.component';
import { ModalPhoneComponent } from './pages/me/modal-phone/modal-phone.component';
import { ModalPasswordComponent } from './pages/me/modal-password/modal-password.component';
import { ModalSocialComponent } from './pages/me/modal-social/modal-social.component';
import { ModalBillsComponent } from './credit/modal-bills/modal-bills.component';
import { ModalCreditPointComponent } from './credit/modal-credit-point/modal-credit-point.component';
import { ModalContactComponent } from './credit/modal-contact/modal-contact.component';
import { ModalMarriageComponent } from './credit/modal-marriage/modal-marriage.component';
import { ModalSecondcontactComponent } from './credit/modal-secondcontact/modal-secondcontact.component';
import { ModalAssetdocsComponent } from './credit/modal-assetdocs/modal-assetdocs.component';
import { ModalJobComponent } from './credit/modal-job/modal-job.component';
import { SelectdownModalComponent } from './payment/selectdown-modal/selectdown-modal.component';
import { ModalAssetdocsDetailComponent } from './credit/modal-assetdocs-detail/modal-assetdocs-detail.component';
import { ModalAddressComponent } from './pages/me/modal-address/modal-address.component';
import { ModalFeedbackComponent } from './setting/modal-feedback/modal-feedback.component';


@NgModule({
  declarations: [AppComponent, 
    ModalCardComponent, 
    ModalCameraComponent, 
    SpecModalComponent, 
    InsallmentModalComponent, 
    PaymentModalComponent,
    VouchersModalComponent,
    PromotionModalComponent,
    SelectdownModalComponent,

    PaymentgiftModalComponent,
    TcoinModalComponent,
    WarrantyModalComponent,
    SpecificationModalComponent,
    ReviewModalComponent,
    ImformationspecModalComponent,

    ModalNicknameComponent,
    ModalPhoneComponent,
    ModalPasswordComponent,
    ModalSocialComponent,
    ModalAddressComponent,
    ModalFeedbackComponent,

    PaymentgiftModalComponent,
    TcoingiftModalComponent,
    WarrantygiftModalComponent,
    SpecificationgiftModalComponent,
    ImformationspecgiftModalComponent,
    
    ModalBillsComponent,
    ModalCreditPointComponent,
    ModalContactComponent,
    ModalMarriageComponent,
    ModalSecondcontactComponent,
    ModalAssetdocsComponent,
    ModalAssetdocsDetailComponent,
    ModalJobComponent
  ],
  entryComponents: [ModalCardComponent, 
    ModalCameraComponent, 
    SpecModalComponent, 
    InsallmentModalComponent, 
    PaymentModalComponent,
    VouchersModalComponent,
    PromotionModalComponent,
    TcoinModalComponent,
    WarrantyModalComponent,
    SpecificationModalComponent,
    ReviewModalComponent,
    ImformationspecModalComponent,
    SelectdownModalComponent,

    ModalNicknameComponent,
    ModalPhoneComponent,
    ModalPasswordComponent,
    ModalSocialComponent,
    ModalAddressComponent,
    ModalFeedbackComponent,

    PaymentgiftModalComponent,
    TcoingiftModalComponent,
    WarrantygiftModalComponent,
    SpecificationgiftModalComponent,
    ImformationspecgiftModalComponent,

    ModalBillsComponent,
    ModalCreditPointComponent,
    ModalContactComponent,
    ModalMarriageComponent,
    ModalSecondcontactComponent,
    ModalAssetdocsComponent,
    ModalAssetdocsDetailComponent,
    ModalJobComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
