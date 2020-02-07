import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cash-back',
  templateUrl: './cash-back.component.html',
  styleUrls: ['./cash-back.component.scss'],
})
export class CashBackComponent implements OnInit {

  @Input() accountData :any

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  ModalDismiss() {
    this.modalController.dismiss();
  }

}
