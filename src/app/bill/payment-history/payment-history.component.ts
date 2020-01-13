import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss'],
})
export class PaymentHistoryComponent implements OnInit {

  @Input() tabNav: any
  @Input() paymentData: any

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.tabNav)
    console.log(this.paymentData)
  }

  goBackClick() {
    this.modalCtrl.dismiss();
  }

}
