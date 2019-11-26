import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-specificationgift-modal',
  templateUrl: './specificationgift-modal.component.html',
  styleUrls: ['./specificationgift-modal.component.scss'],
})
export class SpecificationgiftModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss();
  }

}
