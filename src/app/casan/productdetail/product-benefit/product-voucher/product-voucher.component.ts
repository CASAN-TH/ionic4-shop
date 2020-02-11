import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';
import { ModalController } from '@ionic/angular';
import { ProductVoucherModalComponent } from './product-voucher-modal/product-voucher-modal.component';

@Component({
  selector: 'app-product-voucher',
  templateUrl: './product-voucher.component.html',
  styleUrls: ['./product-voucher.component.scss'],
})
export class ProductVoucherComponent implements OnInit {

  vouchersData: any;
  // @Input() recivedata: any;
  // @Output() openVoucher = new EventEmitter();

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.productdetailService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      this.vouchersData = productdetailDataList;
    })
    // console.log(this.recivedata)
  }

  // voucherModal() {
  //   this.openVoucher.emit();
  // }
  
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

}
