import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdetailService } from './productdetail.service';
import { ModalController, PopoverController } from '@ionic/angular';

import { Location } from '@angular/common';

import { ProductPaymentModalComponent } from '../casan/productdetail/product-payment/product-payment-modal/product-payment-modal.component';
import { ProductShareModalComponent } from '../casan/productdetail/product-share/product-share-modal/product-share-modal.component';
import { ProductSpecModalComponent } from '../casan/productdetail/product-spec/product-spec-modal/product-spec-modal.component';
import { ProductReviewsModalComponent } from '../casan/productdetail/product-reviews/product-reviews-modal/product-reviews-modal.component';
import { ProductImformationSpecModalComponent } from '../casan/productdetail/product-imformation-spec/product-imformation-spec-modal/product-imformation-spec-modal.component';
import { ProductServiceModalComponent } from '../casan/productdetail/product-service/product-service-modal/product-service-modal.component';
import { ProductMenuModalComponent } from '../casan/productdetail/product-menu-modal/product-menu-modal.component';
import { ProductVoucherModalComponent } from '../casan/productdetail/product-benefit/product-voucher/product-voucher-modal/product-voucher-modal.component';
import { ProductGiftModalComponent } from '../casan/productdetail/product-benefit/product-gift/product-gift-modal/product-gift-modal.component';
import { ProductTcoinModalComponent } from '../casan/productdetail/product-benefit/product-tcoin/product-tcoin-modal/product-tcoin-modal.component';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {

  productdetailData: any;
  productwarrantyData: any;
  paymentData: any
  vouchersData: any;
  promotiongiftData: any;
  tcoinData: any;
  warrantyData: any
  specificationData: any
  reviewData: any
  imformationSpecData: any
  shareData: any
  reccommentData: any
  userData: any
  amount: any
  productCartData: any

  constructor(
    private router: Router,
    private productdetailService: ProductdetailService,
    public modalController: ModalController,
    private _location: Location,
    public popoverController: PopoverController
  ) { }

  ngOnInit() {

    this.productdetailService.onProductdetailDataChanged.subscribe((productdetailDataList: any) => {
      this.productdetailData = productdetailDataList;
    })
    this.productdetailService.onProductdetailWarrantyDataChanged.subscribe((productdetailDataList: any) => {
      this.productwarrantyData = productdetailDataList;
    })

    this.productdetailService.onReccommentDataChanged.subscribe((productdetailDataList: any) => {
      this.reccommentData = productdetailDataList;
    })

    this.productdetailService.onProductdetailDataChanged.subscribe((productdetailDataList: any) => {
      this.paymentData = productdetailDataList;
    })

    this.productdetailService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      this.vouchersData = productdetailDataList;
    })
    this.productdetailService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      this.promotiongiftData = productdetailDataList;
      console.log(this.promotiongiftData);
    })

    this.productdetailService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      this.tcoinData = productdetailDataList;
    })

    this.productdetailService.onWarrantyDataChanged.subscribe((productdetailDataList: any) => {
      this.warrantyData = productdetailDataList;
    })

    this.productdetailService.onProductdetailDataChanged.subscribe((productdetailDataList: any) => {
      this.specificationData = productdetailDataList;
    console.log(this.specificationData)
    })

    this.productdetailService.onReviewDataChanged.subscribe((productdetailDataList: any) => {
      this.reviewData = productdetailDataList;
    })

    this.productdetailService.onImformationSpecDataChanged.subscribe((productdetailDataList: any) => {
      this.imformationSpecData = productdetailDataList;
    })

    this.productdetailService.onShareDataChanged.subscribe((productdetailDataList: any) => {
      this.shareData = productdetailDataList;
    })


    this.getUser()  //get เอา id จาก User
  }

  async getUser() {
    const res = await this.productdetailService.getUser()
    this.userData = res   //get เอา id จาก User
  }

  async openPaymentModal() {
    const modal = await this.modalController.create({
      component: ProductPaymentModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        paymentData: this.paymentData
      }
    });
    return await modal.present();
  }

  async openVoucherModal() {
    const modal = await this.modalController.create({
      component: ProductVoucherModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        vouchersData: this.vouchersData
      }
    });
    return await modal.present();
  }

  async openpromotionGiftModal() {
    const modal = await this.modalController.create({
      component: ProductGiftModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        promotiongiftData: this.promotiongiftData
      }
    });
    return await modal.present();
  }

  async openTcoinModal() {
    const modal = await this.modalController.create({
      component: ProductTcoinModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        tcoinData: this.tcoinData
      }
    });
    return await modal.present();
  }
 
  async openServiceModal() {
    const modal = await this.modalController.create({
      component: ProductServiceModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        warrantyData: this.warrantyData
      }
    });
    return await modal.present();
  }
  async openSpecModal() {
    const modal = await this.modalController.create({
      component: ProductSpecModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        specificationData: this.specificationData
      }
    });
    return await modal.present();
  }
  async openReviewsModal() {
    const modal = await this.modalController.create({
      component: ProductReviewsModalComponent,
      componentProps: {
        reviewData: this.reviewData
      }
    });
    return await modal.present();
  }
  async openImformationSpecModal() {
    const modal = await this.modalController.create({
      component: ProductImformationSpecModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        imformationSpecData: this.imformationSpecData
      }
    });
    return await modal.present();
  }

  goBackClick() {
    this._location.back();
  }

  onCartClick(cartId: any) {
    // var amount = 1;
    // console.log(this.amount);
    const body = {
      u_id: this.userData.data.username,
      shop: {
        shop_id: this.productdetailData.shop.shop_id,
        shop_name: this.productdetailData.shop.shop_name,
        shop_image: this.productdetailData.shop.shop_image
      },
      items: [
        {
          product_id: this.productdetailData._id,
          sku: this.productdetailData.sku,
          images: this.productdetailData.images,
          name: this.productdetailData.name,
          option1: this.productdetailData.options_list1.list_items.name,
          option2: this.productdetailData.options_list2.list_items.name,
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
    });
    this.router.navigateByUrl('tabs/cart');
  }
  
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProductMenuModalComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


  async openShareModal() {
    const modal = await this.modalController.create({
      component: ProductShareModalComponent,
      cssClass: 'share-modal-css',
      componentProps: {
        shareData: this.shareData
      }
    });
    return await modal.present();
  }
  onProductClick(productId) {
    this.router.navigateByUrl('/productdetail/' + productId)
  }

}
