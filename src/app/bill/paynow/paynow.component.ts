import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.scss'],
})
export class PaynowComponent implements OnInit {

  @Input() data: any
  numeral = require('numeral');
  priceCurrency: any;

  onCheck: boolean = true;

  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.data)
    const price = this.numeral(this.data.price).format('0,0.00');
    this.priceCurrency = price
  }

  goBackClick() {
    this.modalCtrl.dismiss();
  }

  onEdit() {
    if (this.onCheck === true) {
      this.onCheck = false;
    } else {
      this.onCheck = true;
    }
  }

  onConfirm() {
    this.router.navigate(['/payfor', this.data])
    setTimeout(() => {
      this.modalCtrl.dismiss();
    }, 800)
  }

}
