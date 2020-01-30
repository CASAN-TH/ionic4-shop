import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-imformation-spec-modal',
  templateUrl: './product-imformation-spec-modal.component.html',
  styleUrls: ['./product-imformation-spec-modal.component.scss'],
})
export class ProductImformationSpecModalComponent implements OnInit {

  @Input() ImformationSpecData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.ImformationSpecData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
