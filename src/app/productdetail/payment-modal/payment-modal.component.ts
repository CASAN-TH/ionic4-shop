import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss'],
})
export class PaymentModalComponent implements OnInit {

  @Input() PaymentData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.PaymentData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
