import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';
import { ModalController } from '@ionic/angular';
import { ProductServiceModalComponent } from './product-service-modal/product-service-modal.component';

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
  styleUrls: ['./product-service.component.scss'],
})
export class ProductServiceComponent implements OnInit {

  warrantyData: any
  // @Input() recivedata: any;
  // @Output() openService = new EventEmitter();

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.productdetailService.onWarrantyDataChanged.subscribe((productdetailDataList: any) => {
      this.warrantyData = productdetailDataList;
    })
    // console.log(this.recivedata)
   }

  // serviceModal() {
  //   this.openService.emit();
  // }

  async openServiceModal() {
    const modal = await this.modalController.create({
      component: ProductServiceModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        warrantyData: this.warrantyData
      }
    });
    return await modal.present();
  }

}
