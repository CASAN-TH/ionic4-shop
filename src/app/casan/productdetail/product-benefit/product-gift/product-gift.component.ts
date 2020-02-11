import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';
import { ModalController } from '@ionic/angular';
import { ProductGiftModalComponent } from './product-gift-modal/product-gift-modal.component';

@Component({
  selector: 'app-product-gift',
  templateUrl: './product-gift.component.html',
  styleUrls: ['./product-gift.component.scss'],
})
export class ProductGiftComponent implements OnInit {

  promotiongiftData: any;
  // @Input() recivedata: any;
  // @Output() openpromotionGift = new EventEmitter();

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.productdetailService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      this.promotiongiftData = productdetailDataList;
    })
    // console.log(this.recivedata);
   }

  // promotiongiftModal() {
  //   this.openpromotionGift.emit();
  // }

  async openpromotionGiftModal() {
    const modal = await this.modalController.create({
      component: ProductGiftModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        promotiongiftData: this.promotiongiftData
      }
    });
    return await modal.present();
  }

}
