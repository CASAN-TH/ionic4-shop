import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-debit-credit-card-modal',
  templateUrl: './debit-credit-card-modal.component.html',
  styleUrls: ['./debit-credit-card-modal.component.scss'],
})
export class DebitCreditCardModalComponent implements OnInit {

  @Input() DebitCreditCardData: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.DebitCreditCardData);
  }

  dismiss() {
    this.modalController.dismiss();
  }


}
