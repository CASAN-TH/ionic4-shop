import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recommended-method-modal',
  templateUrl: './recommended-method-modal.component.html',
  styleUrls: ['./recommended-method-modal.component.scss'],
})
export class RecommendedMethodModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

}
