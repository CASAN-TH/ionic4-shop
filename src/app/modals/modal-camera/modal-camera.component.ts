import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-camera',
  templateUrl: './modal-camera.component.html',
  styleUrls: ['./modal-camera.component.scss'],
})
export class ModalCameraComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss({
      'url': 'imageFromData.jpg'
    });
  }
}
