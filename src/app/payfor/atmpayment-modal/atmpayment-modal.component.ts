import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-atmpayment-modal',
  templateUrl: './atmpayment-modal.component.html',
  styleUrls: ['./atmpayment-modal.component.scss'],
})
export class ATMPaymentModalComponent implements OnInit {

  @Input() onATM_PaymentData: any; payforData: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

}
