import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MeService } from '../me.service';

@Component({
  selector: 'app-modal-phone',
  templateUrl: './modal-phone.component.html',
  styleUrls: ['./modal-phone.component.scss'],
})
export class ModalPhoneComponent implements OnInit {

  @Input() PhoneData: any
  mockup: any = {}

  constructor(public modalController: ModalController,
    public meservice: MeService) { }

  ngOnInit() {
    console.log(this.PhoneData);
  }

  ModalDismiss() {
    this.modalController.dismiss();
  }

  async onSavePhone() {
    this.mockup.phone = this.PhoneData;
    const res: any = await this.meservice.updateMeData(this.mockup);
    console.log(res);
    if (res) {
      console.log("save phone complete");
      this.ModalDismiss();
    }
}
}
