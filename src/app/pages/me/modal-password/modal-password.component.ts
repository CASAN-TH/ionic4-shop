import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-password',
  templateUrl: './modal-password.component.html',
  styleUrls: ['./modal-password.component.scss'],
})
export class ModalPasswordComponent implements OnInit {

  @Input()  PasswordData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.PasswordData);
   }

  ModalDismiss() {
    this.modalController.dismiss();
  }

}
