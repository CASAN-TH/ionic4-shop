import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss'],
})
export class ModalContactComponent implements OnInit {

  @Input() contact: any;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log(this.contact);
  }

  onDismiss(){
    this.modalCtrl.dismiss();
  }

  onFinish() {
    console.log(this.contact);
    this.modalCtrl.dismiss();
  }

}
