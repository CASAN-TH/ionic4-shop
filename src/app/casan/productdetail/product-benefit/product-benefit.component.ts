import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductVoucherModalComponent } from './product-voucher/product-voucher-modal/product-voucher-modal.component';
import { ProductGiftModalComponent } from './product-gift/product-gift-modal/product-gift-modal.component';
import { ProductTcoinModalComponent } from './product-tcoin/product-tcoin-modal/product-tcoin-modal.component';

@Component({
  selector: 'app-product-benefit',
  templateUrl: './product-benefit.component.html',
  styleUrls: ['./product-benefit.component.scss'],
})
export class ProductBenefitComponent implements OnInit {

  VouchersData: any;
  PromotionData: any;
  TcoinData: any;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() { }


  async openVoucherModal() {
    const modal = await this.modalController.create({
      component: ProductVoucherModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        VouchersData: this.VouchersData
      }
    });
    return await modal.present();
  }

  async openpromotionGiftModal() {
    const modal = await this.modalController.create({
      component: ProductGiftModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        PromotionData: this.PromotionData
      }
    });
    return await modal.present();
  }

  async openTcoinModal() {
    const modal = await this.modalController.create({
      component: ProductTcoinModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        TcoinData: this.TcoinData
      }
    });
    return await modal.present();
  }

}
