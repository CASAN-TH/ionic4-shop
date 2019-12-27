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

  numeral = require('numeral');
  currencyRemain: any;
  currencyAll: any;
  currencyStable: any;
  currencyTemporary: any;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.progressData = 1 - ((this.creditPoint.credit.creditall - this.creditPoint.credit.creditremain) / this.creditPoint.credit.creditall)
    console.log(this.creditPoint);
    // console.log(this.progressData);
    const remain = this.numeral(this.creditPoint.credit.creditremain).format('0,0');
    this.currencyRemain = remain
    const all = this.numeral(this.creditPoint.credit.creditall).format('0,0');
    this.currencyAll = all
    const stable = this.numeral(this.creditPoint.credit.creditstable).format('0,0');
    this.currencyStable = stable
    const temporary = this.numeral(this.creditPoint.credit.credittemporary).format('0,0');
    this.currencyTemporary = temporary
  }

  goBackClick() {
    this.modalCtrl.dismiss();
  }

}
