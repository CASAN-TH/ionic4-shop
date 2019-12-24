import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-payment-list-modal',
  templateUrl: './payment-list-modal.component.html',
  styleUrls: ['./payment-list-modal.component.scss'],
})
export class PaymentListModalComponent implements OnInit {
@Input() cartDataList:any

  constructor(public modalController: ModalController) { }

  ngOnInit() {}
  
  dismiss() {
    this.modalController.dismiss();
  }
}
