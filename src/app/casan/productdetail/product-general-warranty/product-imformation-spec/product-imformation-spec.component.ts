import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';
import { ModalController } from '@ionic/angular';
import { ProductImformationSpecModalComponent } from './product-imformation-spec-modal/product-imformation-spec-modal.component';

@Component({
  selector: 'app-product-imformation-spec',
  templateUrl: './product-imformation-spec.component.html',
  styleUrls: ['./product-imformation-spec.component.scss'],
})
export class ProductImformationSpecComponent implements OnInit {

  imformationSpecData: any
  // @Input() recivedata: any;
  // @Output() openImformationSpec = new EventEmitter();

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() { 
    this.productdetailService.onImformationSpecDataChanged.subscribe((productdetailDataList: any) => {
      this.imformationSpecData = productdetailDataList;
    })
  }

  // imformationSpecModal() {
  //   this.openImformationSpec.emit();
  // }

  async openImformationSpecModal() {
    const modal = await this.modalController.create({
      component: ProductImformationSpecModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        imformationSpecData: this.imformationSpecData
      }
    });
    return await modal.present();
  }

}
