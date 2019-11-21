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


@NgModule({
  declarations: [AppComponent, ModalCardComponent, ModalCameraComponent,SpecModalComponent,InsallmentModalComponent,PaymentModalComponent,
    VouchersModalComponent,
    PromotionModalComponent,
    TcoinModalComponent,
    WarrantyModalComponent,
    SpecificationModalComponent,
    ReviewModalComponent,
    ImformationspecModalComponent],
  entryComponents: [ModalCardComponent, ModalCameraComponent,SpecModalComponent,InsallmentModalComponent,PaymentModalComponent,
    VouchersModalComponent,
    PromotionModalComponent,
    TcoinModalComponent,
    WarrantyModalComponent,
    SpecificationModalComponent,
    ReviewModalComponent,
    ImformationspecModalComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
