import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpecificationModalComponent } from 'src/app/productdetail/specification-modal/specification-modal.component';

@Component({
  selector: 'app-cart-by-shopitem',
  templateUrl: './cart-by-shopitem.component.html',
  styleUrls: ['./cart-by-shopitem.component.scss'],
})
export class CartByShopitemComponent implements OnInit {

  @Input() itemDatas: Array<any>;
  @Input() specificationData: any;
  @Output() amountChanged: EventEmitter<any> = new EventEmitter()
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // console.log(this.itemDatas)
  }

  onSelectProduct() {
    console.log("selected")
  }

  onOpenlistClick() {
    console.log("nevigate Productlist")
  }

  async specModal() {
    const modal = await this.modalController.create({
      component: SpecificationModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        SpecificationData: this.specificationData
      }
    });
    return await modal.present();
  }

  onRemoveClick(j) {
    this.itemDatas[j].amount_product -= 1;
    this.amountChanged.emit(this.itemDatas);
  }
  onAddClick(j) {
    this.itemDatas[j].amount_product += 1;
    this.amountChanged.emit(this.itemDatas);
  }
}
