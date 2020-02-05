import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bill-modal',
  templateUrl: './bill-modal.component.html',
  styleUrls: ['./bill-modal.component.scss'],
})
export class BillModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

}
