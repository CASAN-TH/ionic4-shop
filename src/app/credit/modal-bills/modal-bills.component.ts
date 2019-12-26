import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-bills',
  templateUrl: './modal-bills.component.html',
  styleUrls: ['./modal-bills.component.scss'],
})
export class ModalBillsComponent implements OnInit {

  @Input() billData: any;
  inx = 0

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { 
    console.log(this.billData)
  }

  goBackClick() {
    this.modalCtrl.dismiss();
  }

  onPreviousBill() {
    this.inx -= 1
    console.log(this.inx)
  }

  onNextBill() {
    this.inx += 1
    console.log(this.inx)
  }
}
