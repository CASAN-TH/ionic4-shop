import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-tcoin-detail',
  templateUrl: './modal-tcoin-detail.component.html',
  styleUrls: ['./modal-tcoin-detail.component.scss'],
})
export class ModalTcoinDetailComponent implements OnInit {

  @Input() TcoinData: any;
  @Input() TcoinDetailData: any;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.TcoinDetailData);
  }

  ModalDismiss() {
    this.modalController.dismiss();
  }

}
