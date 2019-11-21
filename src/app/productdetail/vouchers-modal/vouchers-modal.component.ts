import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vouchers-modal',
  templateUrl: './vouchers-modal.component.html',
  styleUrls: ['./vouchers-modal.component.scss'],
})
export class VouchersModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

}
