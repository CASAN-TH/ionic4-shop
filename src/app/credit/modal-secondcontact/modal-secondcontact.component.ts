import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-secondcontact',
  templateUrl: './modal-secondcontact.component.html',
  styleUrls: ['./modal-secondcontact.component.scss'],
})
export class ModalSecondcontactComponent implements OnInit {

  @Input() secondContact: any;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.secondContact);
  }

  onFinish() {
    this.modalCtrl.dismiss();
  }

}
