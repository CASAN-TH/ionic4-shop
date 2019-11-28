import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-assetdocs-detail',
  templateUrl: './modal-assetdocs-detail.component.html',
  styleUrls: ['./modal-assetdocs-detail.component.scss'],
})
export class ModalAssetdocsDetailComponent implements OnInit {

  @Input() data: any;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  onFinish() {
    this.modalCtrl.dismiss();
  }

}
