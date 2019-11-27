import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-marriage',
  templateUrl: './modal-marriage.component.html',
  styleUrls: ['./modal-marriage.component.scss'],
})
export class ModalMarriageComponent implements OnInit {

  @Input() marriage: any;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.marriage);
  }

  onFinish() {
    console.log(this.marriage);
    this.modalCtrl.dismiss();
  }

}
