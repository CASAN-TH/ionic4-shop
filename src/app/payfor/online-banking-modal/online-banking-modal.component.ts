import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-online-banking-modal',
  templateUrl: './online-banking-modal.component.html',
  styleUrls: ['./online-banking-modal.component.scss'],
})
export class OnlineBankingModalComponent implements OnInit {
  
  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

}
