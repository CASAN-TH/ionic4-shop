import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';
import { ModalController } from '@ionic/angular';
import { ProductShareModalComponent } from './product-share-modal/product-share-modal.component';

@Component({
  selector: 'app-product-share',
  templateUrl: './product-share.component.html',
  styleUrls: ['./product-share.component.scss'],
})
export class ProductShareComponent implements OnInit {

  shareData: any
  // @Output() openShare = new EventEmitter();

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.productdetailService.onShareDataChanged.subscribe((productdetailDataList: any) => {
      this.shareData = productdetailDataList;
    })
   }

  // shareModal() {
  //   this.openShare.emit();
  // }

  async openShareModal() {
    const modal = await this.modalController.create({
      component: ProductShareModalComponent,
      cssClass: 'share-modal-css',
      componentProps: {
        shareData: this.shareData
      }
    });
    return await modal.present();
  }

}
