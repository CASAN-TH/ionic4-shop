import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';
import { ModalController } from '@ionic/angular';
import { ProductSpecModalComponent } from './product-spec-modal/product-spec-modal.component';

@Component({
  selector: 'app-product-spec',
  templateUrl: './product-spec.component.html',
  styleUrls: ['./product-spec.component.scss'],
})
export class ProductSpecComponent implements OnInit {

  specificationData: any
  // @Input() recivedata: any;
  // @Output() openSpec = new EventEmitter();

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.productdetailService.onProductdetailDataChanged.subscribe((productdetailDataList: any) => {
      this.specificationData = productdetailDataList;
    })
    // console.log(this.recivedata)
   }

  // specModal() {
  //   this.openSpec.emit();
  // }

  async openSpecModal() {
    const modal = await this.modalController.create({
      component: ProductSpecModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        specificationData: this.specificationData
      }
    });
    return await modal.present();
  }

}
