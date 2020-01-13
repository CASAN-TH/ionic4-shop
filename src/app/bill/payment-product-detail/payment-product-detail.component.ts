import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-payment-product-detail',
  templateUrl: './payment-product-detail.component.html',
  styleUrls: ['./payment-product-detail.component.scss'],
})
export class PaymentProductDetailComponent implements OnInit {

  @Input() data: any

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

  goBackClick() {
    this.modalCtrl.dismiss();
  }
}
