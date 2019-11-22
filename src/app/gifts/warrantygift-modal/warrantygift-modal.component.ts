import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-warrantygift-modal',
  templateUrl: './warrantygift-modal.component.html',
  styleUrls: ['./warrantygift-modal.component.scss'],
})
export class WarrantygiftModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss();
  }

}
