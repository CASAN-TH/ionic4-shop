import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCameraComponent } from 'src/app/modals/modal-camera/modal-camera.component';

@Component({
  selector: 'app-modal-assetdocs-detail',
  templateUrl: './modal-assetdocs-detail.component.html',
  styleUrls: ['./modal-assetdocs-detail.component.scss'],
})
export class ModalAssetdocsDetailComponent implements OnInit {

  @Input() data: any;
  sendBackUp: any;
  getBackUp: any;
  mockup = {
    "url": ""
  }
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    // console.log(this.data);
    this.sendBackUp = JSON.stringify(this.data)
    // console.log(this.sendBackUp);
  }

  onFinish() {
    const dataCallBack: Array<any> = [];
    this.data.images.forEach(el => {
      if (el.url !== "") {
        dataCallBack.push(el);
      }
    });
    console.log(dataCallBack);
    this.modalCtrl.dismiss(dataCallBack);
  }

  onDismiss() {
    this.getBackUp = JSON.parse(this.sendBackUp)
    // console.log(this.getBackUp);
    this.modalCtrl.dismiss(this.getBackUp.images);
  }

  addImage() {
    this.data.images.push(this.mockup);
    // console.log(this.data);
  }

  deleteImage(index) {
    // console.log(this.data);
    this.data.images[index].url = "";

  }

  async openCamera(index) {
    // console.log(index);
    const modal = await this.modalCtrl.create({
      component: ModalCameraComponent
    });
    modal.onDidDismiss().then(url => {
      // console.log(url.data)
      this.data.images[index] = url.data
      // console.log(this.data)
    });
    return await modal.present();
  }

}
