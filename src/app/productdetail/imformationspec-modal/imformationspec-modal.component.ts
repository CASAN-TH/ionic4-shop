import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-imformationspec-modal',
  templateUrl: './imformationspec-modal.component.html',
  styleUrls: ['./imformationspec-modal.component.scss'],
})
export class ImformationspecModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

}
