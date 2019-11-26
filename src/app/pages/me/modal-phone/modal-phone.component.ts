import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-phone',
  templateUrl: './modal-phone.component.html',
  styleUrls: ['./modal-phone.component.scss'],
})
export class ModalPhoneComponent implements OnInit {

  @Input() PhoneData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.PhoneData);
  }

  ModalDismiss() {
    this.modalController.dismiss();
  }

  onSavePhone() {
    console.log("SavePhone");
  }
}
