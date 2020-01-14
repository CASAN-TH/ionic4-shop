import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bill-payment',
  templateUrl: './bill-payment.component.html',
  styleUrls: ['./bill-payment.component.scss'],
})
export class BillPaymentComponent implements OnInit {

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
