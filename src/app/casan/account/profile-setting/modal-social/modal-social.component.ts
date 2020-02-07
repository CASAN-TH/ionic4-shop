import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-social',
  templateUrl: './modal-social.component.html',
  styleUrls: ['./modal-social.component.scss'],
})
export class ModalSocialComponent implements OnInit {

  

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }

}
