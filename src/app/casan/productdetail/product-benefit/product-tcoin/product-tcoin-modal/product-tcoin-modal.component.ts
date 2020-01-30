import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-tcoin-modal',
  templateUrl: './product-tcoin-modal.component.html',
  styleUrls: ['./product-tcoin-modal.component.scss'],
})
export class ProductTcoinModalComponent implements OnInit {

  @Input() TcoinData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.TcoinData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
