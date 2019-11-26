import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-nickname',
  templateUrl: './modal-nickname.component.html',
  styleUrls: ['./modal-nickname.component.scss'],
})
export class ModalNicknameComponent implements OnInit {

  @Input() NicknameData: any

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.NicknameData);
  }

  ModalDismiss() {
    this.modalController.dismiss();
  }

  onSaveNickname() {
    console.log("SaveNickname");
  }
}
