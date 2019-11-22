import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vouchers-modal',
  templateUrl: './vouchers-modal.component.html',
  styleUrls: ['./vouchers-modal.component.scss'],
})
export class VouchersModalComponent implements OnInit {

  @Input() VouchersData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.VouchersData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
