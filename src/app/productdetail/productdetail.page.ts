import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdetailService } from './productdetail.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { VouchersModalComponent } from './vouchers-modal/vouchers-modal.component';
import { PromotionModalComponent } from './promotion-modal/promotion-modal.component';
import { TcoinModalComponent } from './tcoin-modal/tcoin-modal.component';
import { WarrantyModalComponent } from './warranty-modal/warranty-modal.component';
import { SpecificationModalComponent } from './specification-modal/specification-modal.component';
import { ReviewModalComponent } from './review-modal/review-modal.component';
import { ImformationspecModalComponent } from './imformationspec-modal/imformationspec-modal.component';

import { Location } from '@angular/common';
import { SelectMenuComponent } from './select-menu/select-menu.component';
import { ShareModalComponent } from './share-modal/share-modal.component';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {

  productdetailData: any;
  productwarrantyData: any;
  PaymentData: any
  VouchersData: any
  PromotionData: any
  TcoinData: any
  WarrantyData: any
  SpecificationData: any
  ReviewData: any
  ImformationSpecData: any
  ShareData: any
  ReccommentData: any


  productCartData: any

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  constructor(
    private router: Router,
    private productdetailService: ProductdetailService,
    public modalController: ModalController,
    private _location: Location,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.productdetailService.onProductdetailDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.productdetailData = productdetailDataList;
      // this.productCartData = productdetailDataList;
      console.log(this.productdetailData)
    })
    this.productdetailService.onProductdetailWarrantyDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.productwarrantyData = productdetailDataList;
      console.log(this.productwarrantyData)
    })

    // this.productdetailService.onReccommentDataChanged.subscribe((productdetailDataList: any) => {
    //   console.log(productdetailDataList);
    //   this.ReccommentData = productdetailDataList;
    // })

    this.productdetailService.onProductdetailDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.PaymentData = productdetailDataList;
      console.log(this.PaymentData)
    })
    /////////////////////////////////////////////////////////////////////
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
    /////////////////////////////////////////////////////////////////////
    this.productdetailService.onProductdetailDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.SpecificationData = productdetailDataList;
    })
    /////////////////////////////////////////////////////////////////////
    this.productdetailService.onReviewDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.ReviewData = productdetailDataList;
    })

    this.productdetailService.onImformationSpecDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.ImformationSpecData = productdetailDataList;
    })

    this.productdetailService.onShareDataChanged.subscribe((productdetailDataList: any) => {
      console.log(productdetailDataList);
      this.ShareData = productdetailDataList;
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

  onCartClick(cartId: any) {
    const body = {
      // u_id: this.productdetailData.u_id,
      "u_id": "0992436806",
      shop: {
        shop_id: this.productdetailData.shop.shop_id,
        shop_name: this.productdetailData.shop.shop_name,
        shop_image: this.productdetailData.shop.shop_image
      },
      items: [
        {
          // product_id: this.productdetailData.product_id,
          "product_id": "Product001",
          sku: this.productdetailData.sku,
          images: this.productdetailData.images,
          name: this.productdetailData.name,
          option1: this.productdetailData.option1,
          option2: this.productdetailData.option2,
          // "option1": "green",
          // "option2": "32GB",
          sale_price_percentage: this.productdetailData.sale_price_percentage,
          sale_avaliable: this.productdetailData.sale_avaliable,
          sale_price: {
            price: this.productdetailData.sale_price.price,
            currency: this.productdetailData.sale_price.currency
          },
          sale_price_text: this.productdetailData.sale_price_text,
          regular_price: {
            price: this.productdetailData.regular_price.price,
            currency: this.productdetailData.regular_price.currency
          },
          regular_price_text: this.productdetailData.regular_price_text,
          down_payment: {
            price: this.productdetailData.down_payment.price,
            currency: this.productdetailData.down_payment.currency
          },
          down_payment_text: this.productdetailData.down_payment_text,
          installment: {
            price: this.productdetailData.installment.price,
            period: this.productdetailData.installment.period,
            currency: this.productdetailData.installment.currency
          },
          installment_price_text: this.productdetailData.installment_price_text,
          // amount_product: this.productdetailData.amount_product,
          "amount_product": 2,
          // shipping: {
          //   shipping_name: this.productdetailData.shipping.shipping_name,
          //   shipping_fee: this.productdetailData.shipping.shipping_fee,
          //   shipping_currency: this.productdetailData.shipping.shipping_currency
          // },
          "shipping": {
            "shipping_name": "kerry",
            "shipping_fee": 50,
            "shipping_currency": "฿"
          },
          // promotions: [
          //   {
          //     gift_type: this.productdetailData.promotions.gift_type,
          //     gift_name: this.productdetailData.promotions.gift_name,
          //     gift_amount: this.productdetailData.promotions.gift_amount
          //   }
          // ],
          "promotions": [
            {
              "gift_type": "ของแถม",
              "gift_name": "หูฟังไร้สาย",
              "gift_amount": 1
            }
          ],
          down_payment_lists: this.productdetailData.down_payment_lists,
          periods_lists: this.productdetailData.periods_lists
        }
      ]
    }
    console.log(body);
    this.productdetailService.adProductCartList(body).then(value => {
      this._location.back();
      this.router.navigateByUrl('tabs/cart');
    });
    // console.log("onCartClick");
    // this.addproductcart.post(this.productdetailData)
    // this.productdetailService.adProductCartList(this.productdetailData)
    // this.router.navigateByUrl('tabs/cart');
  }
  // onPaymentClick(paymentId: any) {
  //   console.log("onPaymentClick");
  //   this.router.navigateByUrl('payment/' + paymentId);
  // }
  // onChatClick() {
  //   console.log("Chat Bot");
  // }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SelectMenuComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


  async onShareModalClick() {
    const modal = await this.modalController.create({
      component: ShareModalComponent,
      cssClass: 'share-modal-css',
      componentProps: {
        ShareData: this.ShareData
      }
    });
    return await modal.present();
  }

}
