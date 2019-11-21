import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-insallment-modal',
  templateUrl: './insallment-modal.component.html',
  styleUrls: ['./insallment-modal.component.scss'],
})
export class InsallmentModalComponent implements OnInit {

  constructor(public modalController:ModalController) { }

  ngOnInit() {}
  dismiss(){
    this.modalController.dismiss();
  }
}
