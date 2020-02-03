import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-service-modal',
  templateUrl: './product-service-modal.component.html',
  styleUrls: ['./product-service-modal.component.scss'],
})
export class ProductServiceModalComponent implements OnInit {

  @Input() warrantyData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.warrantyData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
