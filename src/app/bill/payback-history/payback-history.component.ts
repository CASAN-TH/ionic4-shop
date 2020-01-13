import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-payback-history',
  templateUrl: './payback-history.component.html',
  styleUrls: ['./payback-history.component.scss'],
})
export class PaybackHistoryComponent implements OnInit {

  @Input() paybackData: any

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.paybackData)
  }

  goBackClick() {
    this.modalCtrl.dismiss();
  }

}
