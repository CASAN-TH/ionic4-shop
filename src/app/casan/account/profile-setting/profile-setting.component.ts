import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalNicknameComponent } from './modal-nickname/modal-nickname.component';
import { ModalPhoneComponent } from './modal-phone/modal-phone.component';
import { AddressListComponent } from '../address-list/address-list.component';
import { ModalSocialComponent } from './modal-social/modal-social.component';
import { ModalPasswordComponent } from './modal-password/modal-password.component';
import { ModalCreditPointComponent } from 'src/app/credit/modal-credit-point/modal-credit-point.component';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss'],
})
export class ProfileSettingComponent implements OnInit {

  @Input() meData: any;
  @Input() nicknameData: any;
  @Input() phoneData: any;
  @Input() addressData: any;
  @Input() passwordData: any;
  @Input() creditPointData: any;
  constructor(
    public modalController: ModalController,
    private router: Router

  ) { }

  ngOnInit() {

  }

  onOpenCamera() {
    console.log("onOpenCamera");
  }

  async nicknameModal() {
    const modal = await this.modalController.create({
      component: ModalNicknameComponent,
      componentProps: {
        NicknameData: this.nicknameData
      }
    });
    return await modal.present();
  };

  async phoneModal() {
    const modal = await this.modalController.create({
      component: ModalPhoneComponent,
      componentProps: {
        PhoneData: this.phoneData
      }
    });
    return await modal.present();
  };

  async addresslModal() {
    const modal = await this.modalController.create({
      component: AddressListComponent,
      componentProps: {
        AddressData: this.addressData
      }
    });
    return await modal.present();
  };

  async socialModal() {
    const modal = await this.modalController.create({
      component: ModalSocialComponent
    });
    return await modal.present();
  };

  async passwordModal() {
    const modal = await this.modalController.create({
      component: ModalPasswordComponent,
      componentProps: {
        PasswordData: this.passwordData
      }
    });
    return await modal.present();
  };

  async creditPointModal() {
    const modal = await this.modalController.create({
      component: ModalCreditPointComponent,
      componentProps: {
        creditPoint: this.creditPointData
      }
    });
    return await modal.present();
  };

  onOpenCreditInfoPage() {
    this.router.navigate(['credit']);
  };

}
