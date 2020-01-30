import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-voucher-modal',
  templateUrl: './product-voucher-modal.component.html',
  styleUrls: ['./product-voucher-modal.component.scss'],
})
export class ProductVoucherModalComponent implements OnInit {

  @Input() vouchersData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.vouchersData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
