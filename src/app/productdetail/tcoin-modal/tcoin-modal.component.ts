import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tcoin-modal',
  templateUrl: './tcoin-modal.component.html',
  styleUrls: ['./tcoin-modal.component.scss'],
})
export class TcoinModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

}
