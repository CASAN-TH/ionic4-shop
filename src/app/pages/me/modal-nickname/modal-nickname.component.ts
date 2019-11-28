import { MeService } from './../me.service';
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

  mockup: any = {}

  constructor(
    public modalController: ModalController,
    public meservice: MeService
  ) { }

  ngOnInit() {
    console.log(this.NicknameData);
  }

  ModalDismiss() {
    this.modalController.dismiss();
  }

  async onSaveNickname() {
    this.mockup.nickname = this.NicknameData;
    const res: any = await this.meservice.updateMeData(this.mockup);
    console.log(res);
    if (res) {
      console.log("complete");
      this.ModalDismiss();
    }


  }
}
