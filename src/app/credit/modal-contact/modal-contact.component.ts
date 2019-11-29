import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss'],
})
export class ModalContactComponent implements OnInit {

  @Input() contact: any;
  sendBU: any;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.contact);
    this.sendBU = JSON.stringify(this.contact)
  }

  onDismiss() {
    const getBU = JSON.parse(this.sendBU)
    console.log(getBU);
    this.modalCtrl.dismiss(getBU);
  }

  onFinish() {
    console.log(this.contact);
    this.modalCtrl.dismiss(this.contact);
  }

}
