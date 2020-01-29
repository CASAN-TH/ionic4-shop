import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpecificationModalComponent } from 'src/app/productdetail/specification-modal/specification-modal.component';

@Component({
  selector: 'app-cart-by-shopitem',
  templateUrl: './cart-by-shopitem.component.html',
  styleUrls: ['./cart-by-shopitem.component.scss'],
})
export class CartByShopitemComponent implements OnInit {

  @Input() cateData: any;
  @Input() specificationData: any;
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // console.log(this.specificationData)
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

  // onRemoveClick(j) {
  //   this.cartDataList[i].items[j].amount_product -= 1
  //   console.log(this.cartDataList[i].items[j].amount_product)
  // }
  // onAddClick(j) {
  //   this.cartDataList[i].items[j].amount_product += 1
  //   console.log(this.cartDataList[i].items[j].amount_product)
  // }
}
