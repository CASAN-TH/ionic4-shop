import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-followedshop',
  templateUrl: './modal-followedshop.component.html',
  styleUrls: ['./modal-followedshop.component.scss'],
})
export class ModalFollowedshopComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }


}
