import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-feedback',
  templateUrl: './modal-feedback.component.html',
  styleUrls: ['./modal-feedback.component.scss'],
})
export class ModalFeedbackComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }


}
