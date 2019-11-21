import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-warranty-modal',
  templateUrl: './warranty-modal.component.html',
  styleUrls: ['./warranty-modal.component.scss'],
})
export class WarrantyModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

}
