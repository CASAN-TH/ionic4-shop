import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tcoin-modal',
  templateUrl: './tcoin-modal.component.html',
  styleUrls: ['./tcoin-modal.component.scss'],
})
export class TcoinModalComponent implements OnInit {

  @Input() TcoinData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.TcoinData);
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
