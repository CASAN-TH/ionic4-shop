import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeService } from './me.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ModalNicknameComponent } from './modal-nickname/modal-nickname.component';
import { ModalPhoneComponent } from './modal-phone/modal-phone.component';
import { ModalPasswordComponent } from './modal-password/modal-password.component';
import { ModalSocialComponent } from './modal-social/modal-social.component';
import { ModalAddressComponent } from './modal-address/modal-address.component';
import { ModalCreditPointComponent } from 'src/app/credit/modal-credit-point/modal-credit-point.component';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {
  meDataList: any;
  meData: any;
  NicknameData: any;
  PhoneData: any;
  PasswordData: any;
  AddressData: any;
  creditPointData: any;
  creditPoint: any;

  constructor(private router: Router, 
    private meService : MeService,  
    private _location: Location,
    public modalController: ModalController) { }

  ngOnInit() {
    this.meService.onMeDataListChanged.subscribe((meDataList:any)=>{
      console.log(meDataList);
      this.meDataList = meDataList;
    })
    this.meService.onMeData2Changed.subscribe((meData)=>{
      console.log(meData);
      this.meData = meData;
      this.NicknameData = meData.nickname;
      this.PhoneData = meData.phone;
      this.PasswordData = meData.password;
      this.AddressData = meData.address;
    })
    this.meService.onCreditDataChanged.subscribe((creditPointData:any)=>{
      console.log(creditPointData);
      this.creditPointData = creditPointData;
    })
  }

  onBackClick() {
    this._location.back();
  }

  async nicknameModal() {
    const modal = await this.modalController.create({
      component: ModalNicknameComponent,
      componentProps: {
        NicknameData: this.NicknameData
      }
    });
    return await modal.present();
  }

  async phoneModal() {
    const modal = await this.modalController.create({
      component: ModalPhoneComponent,
      componentProps: {
        PhoneData: this.PhoneData
      }
    });
    return await modal.present();
  }

  async passwordModal() {
    const modal = await this.modalController.create({
      component: ModalPasswordComponent,
      componentProps: {
        PasswordData: this.PasswordData
      }
    });
    return await modal.present();
  }

  async socialModal() {
    const modal = await this.modalController.create({
      component: ModalSocialComponent
    });
    return await modal.present();
  }

  async addresslModal() {
    const modal = await this.modalController.create({
      component: ModalAddressComponent,
      componentProps: {
        AddressData: this.AddressData
      }
    });
    return await modal.present();
  }

  async creditPointModal() {
    const modal = await this.modalController.create({
      component: ModalCreditPointComponent,
      componentProps: {
        creditPoint: this.creditPointData
      }
    });
    return await modal.present();
  }

  onOpenCamera() {
    console.log("onOpenCamera");
  }


  onOpenAddressModal() {
    console.log("onOpenAddressModal");
  }

  onOpenSocialMediaModal() {
    console.log("onOpenSocialMediaModal");
  }

  onOpenCreditModal() {
    console.log("onOpenCreditModal");
  }

  onOpenCreditInfoPage() {
    this.router.navigate(['credit']);
  }

}
