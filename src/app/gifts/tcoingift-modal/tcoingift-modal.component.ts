import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tcoingift-modal',
  templateUrl: './tcoingift-modal.component.html',
  styleUrls: ['./tcoingift-modal.component.scss'],
})
export class TcoingiftModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss();
  }

}
