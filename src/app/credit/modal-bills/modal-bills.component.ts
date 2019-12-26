import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-bills',
  templateUrl: './modal-bills.component.html',
  styleUrls: ['./modal-bills.component.scss'],
})
export class ModalBillsComponent implements OnInit {

  @Input() billData: any;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  goBackClick() {
    this.modalCtrl.dismiss();
  }
}
