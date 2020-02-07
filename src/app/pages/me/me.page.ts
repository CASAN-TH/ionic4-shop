import { Component, OnInit } from '@angular/core';
import { MeService } from './me.service';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';

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

  constructor(
    private meService: MeService,
    private _location: Location,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.meService.onMeDataListChanged.subscribe((meDataList: any) => {
      this.meDataList = meDataList;
    })
    this.meService.onMeData2Changed.subscribe((meData) => {
      this.meData = meData;
      this.NicknameData = meData.nickname;
      this.PhoneData = meData.phone;
      this.PasswordData = meData.password;
      this.AddressData = meData.address;
    })
    this.meService.onCreditDataChanged.subscribe((creditPointData: any) => {
      this.creditPointData = creditPointData;
    })
  }

  onBackClick() {
    this._location.back();
  }

}
