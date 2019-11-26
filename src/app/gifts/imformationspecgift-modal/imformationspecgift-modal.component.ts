import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-imformationspecgift-modal',
  templateUrl: './imformationspecgift-modal.component.html',
  styleUrls: ['./imformationspecgift-modal.component.scss'],
})
export class ImformationspecgiftModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss();
  }

}
