import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-assetdocs',
  templateUrl: './modal-assetdocs.component.html',
  styleUrls: ['./modal-assetdocs.component.scss'],
})
export class ModalAssetdocsComponent implements OnInit {

  @Input() assetDocs: any;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.assetDocs);
  }

  onFinish() {
    this.modalCtrl.dismiss();
  }

}
