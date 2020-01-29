import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VouchersModalComponent } from 'src/app/productdetail/vouchers-modal/vouchers-modal.component';
import { PromotionModalComponent } from 'src/app/productdetail/promotion-modal/promotion-modal.component';
import { TcoinModalComponent } from 'src/app/productdetail/tcoin-modal/tcoin-modal.component';

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
      component: VouchersModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        VouchersData: this.VouchersData
      }
    });
    return await modal.present();
  }

  async openpromotionGiftModal() {
    const modal = await this.modalController.create({
      component: PromotionModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        PromotionData: this.PromotionData
      }
    });
    return await modal.present();
  }

  async openTcoinModal() {
    const modal = await this.modalController.create({
      component: TcoinModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        TcoinData: this.TcoinData
      }
    });
    return await modal.present();
  }

}
