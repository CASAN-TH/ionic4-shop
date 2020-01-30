import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-voucher-modal',
  templateUrl: './product-voucher-modal.component.html',
  styleUrls: ['./product-voucher-modal.component.scss'],
})
export class ProductVoucherModalComponent implements OnInit {

  @Input() VouchersData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.VouchersData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
