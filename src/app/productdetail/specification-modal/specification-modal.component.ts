import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-specification-modal',
  templateUrl: './specification-modal.component.html',
  styleUrls: ['./specification-modal.component.scss'],
})
export class SpecificationModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

}
