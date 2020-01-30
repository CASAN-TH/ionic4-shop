import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-followed-shop',
  templateUrl: './followed-shop.component.html',
  styleUrls: ['./followed-shop.component.scss'],
})
export class FollowedShopComponent implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }

}
