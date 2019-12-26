import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-atm-bill-modal',
  templateUrl: './atm-bill-modal.component.html',
  styleUrls: ['./atm-bill-modal.component.scss'],
})
export class AtmBillModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }


}
