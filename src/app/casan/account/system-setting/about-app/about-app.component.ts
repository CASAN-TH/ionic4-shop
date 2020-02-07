import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.scss'],
})
export class AboutAppComponent implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }

}
