import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdetailService } from './productdetail.service';
import { ModalController } from '@ionic/angular';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { VouchersModalComponent } from './vouchers-modal/vouchers-modal.component';
import { PromotionModalComponent } from './promotion-modal/promotion-modal.component';
import { TcoinModalComponent } from './tcoin-modal/tcoin-modal.component';
import { WarrantyModalComponent } from './warranty-modal/warranty-modal.component';
import { SpecificationModalComponent } from './specification-modal/specification-modal.component';
import { ReviewModalComponent } from './review-modal/review-modal.component';
import { ImformationspecModalComponent } from './imformationspec-modal/imformationspec-modal.component';

import { Location } from '@angular/common'

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {

  productdetailData: any;
  PaymentData: any
  VouchersData: any
  PromotionData: any
  TcoinData: any
  WarrantyData: any
  SpecificationData: any
  ReviewData: any
  ImformationSpecData: any
  ReccommentData: any

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  constructor(
    private router: Router,
    private productdetailService: ProductdetailService,
    public modalController: ModalController,
    private _location: Location) { }

  ngOnInit() {
    this.productdetailService.onProductdetailDataListChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.productdetailData = productdetailDataList;
    })

    this.productdetailService.onReccommentDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.ReccommentData = productdetailDataList;
    })

    this.productdetailService.onPaymentDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.PaymentData = productdetailDataList;
    })

    this.productdetailService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.VouchersData = productdetailDataList;
    })

    this.productdetailService.onPromotionDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.PromotionData = productdetailDataList;
    })

    this.productdetailService.onTcoinDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.TcoinData = productdetailDataList;
    })

    this.productdetailService.onWarrantyDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.WarrantyData = productdetailDataList;
    })

    this.productdetailService.onSpecificationDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.SpecificationData = productdetailDataList;
    })

    this.productdetailService.onReviewDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.ReviewData = productdetailDataList;
    })

    this.productdetailService.onImformationSpecDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.ImformationSpecData = productdetailDataList;
    })
  }

  async paymentModal() {
    const modal = await this.modalController.create({
      component: PaymentModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        PaymentData: this.PaymentData
      }
    });
    return await modal.present();
  }
  async vouchersModal() {
    const modal = await this.modalController.create({
      component: VouchersModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        VouchersData: this.VouchersData
      }
    });
    return await modal.present();
  }
  async promotionModal() {
    const modal = await this.modalController.create({
      component: PromotionModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        PromotionData: this.PromotionData
      }
    });
    return await modal.present();
  }
  async tcoinModal() {
    const modal = await this.modalController.create({
      component: TcoinModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        TcoinData: this.TcoinData
      }
    });
    return await modal.present();
  }
  async warrantyModal() {
    const modal = await this.modalController.create({
      component: WarrantyModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        WarrantyData: this.WarrantyData
      }
    });
    return await modal.present();
  }
  async specificationModal() {
    const modal = await this.modalController.create({
      component: SpecificationModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        SpecificationData: this.SpecificationData
      }
    });
    return await modal.present();
  }
  async reviewModal() {
    const modal = await this.modalController.create({
      component: ReviewModalComponent,
      componentProps: {
        ReviewData: this.ReviewData
      }
    });
    return await modal.present();
  }
  async imformationSpecModal() {
    const modal = await this.modalController.create({
      component: ImformationspecModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        ImformationSpecData: this.ImformationSpecData
      }
    });
    return await modal.present();
  }

  goBackClick() {
    this._location.back();
  }

  // onCartClick() {
  //   console.log("onCartClick");
  //   this.router.navigateByUrl('tabs/cart');
  // }
  // onPaymentClick(paymentId: any) {
  //   console.log("onPaymentClick");
  //   this.router.navigateByUrl('payment/' + paymentId);
  // }
  // onChatClick() {
  //   console.log("Chat Bot");
  // }

}
