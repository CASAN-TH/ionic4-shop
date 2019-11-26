import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-credit-point',
  templateUrl: './modal-credit-point.component.html',
  styleUrls: ['./modal-credit-point.component.scss'],
})
export class ModalCreditPointComponent implements OnInit {

  @Input() creditPoint: any;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.creditPoint);
  }

  onFinish() {
    this.modalCtrl.dismiss();
  }

}
