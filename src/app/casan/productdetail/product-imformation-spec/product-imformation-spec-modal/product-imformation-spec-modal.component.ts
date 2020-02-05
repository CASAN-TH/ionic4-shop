import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-imformation-spec-modal',
  templateUrl: './product-imformation-spec-modal.component.html',
  styleUrls: ['./product-imformation-spec-modal.component.scss'],
})
export class ProductImformationSpecModalComponent implements OnInit {

  @Input() imformationSpecData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.imformationSpecData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
