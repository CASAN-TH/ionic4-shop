import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-bills',
  templateUrl: './modal-bills.component.html',
  styleUrls: ['./modal-bills.component.scss'],
})
export class ModalBillsComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  onFinish() {
    this.modalCtrl.dismiss();
  }
}
