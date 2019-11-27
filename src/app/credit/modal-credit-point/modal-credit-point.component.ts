import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-credit-point',
  templateUrl: './modal-credit-point.component.html',
  styleUrls: ['./modal-credit-point.component.scss'],
})
export class ModalCreditPointComponent implements OnInit {

  @Input() creditPoint: any;
  progressData: any;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.progressData = 1 - ((this.creditPoint.credit.creditall - this.creditPoint.credit.creditremain) / this.creditPoint.credit.creditall)
    console.log(this.creditPoint);
    // console.log(this.progressData);
  }

  onFinish() {
    this.modalCtrl.dismiss();
  }

}
