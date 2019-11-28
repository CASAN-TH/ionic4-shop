import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAssetdocsDetailComponent } from '../modal-assetdocs-detail/modal-assetdocs-detail.component';

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

  async onModalAddAssetDocs(item, index) {
    if (!item.images[0]) {
      // console.log('No Array');
      const modal = await this.modalCtrl.create({
        component: ModalAssetdocsDetailComponent,
        componentProps: {
          'data': {
            "name": item.name,
            "images": [{
              "url": ""
            }]
          }
        }
      });
      modal.onDidDismiss().then(data => {
        let dataBack: Array<any> = [];
        data.data.forEach(el => {
          if (el.url !== "") {
            dataBack.push(el)
          }
        });
        this.assetDocs.assetdocs[index].images = dataBack
        console.log(this.assetDocs.assetdocs[index]);
      });
      return await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: ModalAssetdocsDetailComponent,
        componentProps: {
          'data': item
        }
      });
      modal.onDidDismiss().then(data => {
        this.assetDocs.assetdocs[index].images = data.data
        console.log(data.data);
        console.log(this.assetDocs.assetdocs[index].images);
      });
      return await modal.present();
    }
  }

}
