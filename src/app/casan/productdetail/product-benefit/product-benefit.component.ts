import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductVoucherModalComponent } from './product-voucher/product-voucher-modal/product-voucher-modal.component';
import { ProductGiftModalComponent } from './product-gift/product-gift-modal/product-gift-modal.component';
import { ProductTcoinModalComponent } from './product-tcoin/product-tcoin-modal/product-tcoin-modal.component';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';

@Component({
  selector: 'app-product-benefit',
  templateUrl: './product-benefit.component.html',
  styleUrls: ['./product-benefit.component.scss'],
})
export class ProductBenefitComponent implements OnInit {

  vouchersData: any;
  promotiongiftData: any;
  tcoinData: any;

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() { 
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

}
