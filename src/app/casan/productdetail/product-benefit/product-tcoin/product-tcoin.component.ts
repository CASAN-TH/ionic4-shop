import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';
import { ModalController } from '@ionic/angular';
import { ProductTcoinModalComponent } from './product-tcoin-modal/product-tcoin-modal.component';

@Component({
  selector: 'app-product-tcoin',
  templateUrl: './product-tcoin.component.html',
  styleUrls: ['./product-tcoin.component.scss'],
})
export class ProductTcoinComponent implements OnInit {

  tcoinData: any;
  // @Input() recivedata: any;
  // @Output() openTcoin = new EventEmitter();

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.productdetailService.onVouchersDataChanged.subscribe((productdetailDataList: any) => {
      this.tcoinData = productdetailDataList;
    })

  }

  // tcoinModal() {
  //   this.openTcoin.emit();
  // }

  async openTcoinModal() {
    const modal = await this.modalController.create({
      component: ProductTcoinModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        tcoinData: this.tcoinData
      }
    });
    return await modal.present();
  }

}
