import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingService } from './setting.service';
import { Location } from '@angular/common'
import { ModalFeedbackComponent } from './modal-feedback/modal-feedback.component';
import { ModalController } from '@ionic/angular';
import { ModalAboutComponent } from './modal-about/modal-about.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  settingDataList: any;
  AboutData: any;

  constructor(private router: Router, 
              private settingService : SettingService,
              private _location: Location,
              public modalController: ModalController) { }

  ngOnInit() {
    this.settingService.onSettingDataListChanged.subscribe((settingDataList:any)=>{
      // console.log(settingDataList);
      this.settingDataList = settingDataList;
    })
    this.settingService.onAboutDataListChanged.subscribe((AboutData) => {
      console.log(AboutData);
      this.AboutData = AboutData;
    })
  }

  async feedbackModal() {
    const modal = await this.modalController.create({
      component: ModalFeedbackComponent,
    });
    return await modal.present();
  }

  async aboutModal() {
    const modal = await this.modalController.create({
      component: ModalAboutComponent,
      componentProps: {
      AboutData: this.AboutData
      }
    });
    return await modal.present();
  }


  onBackClick() {
    this._location.back();
  }

  onToMePage(){
    this.router.navigate(['me']);
  }

  onToLogout(){
    console.log("onLogout");
  }
}
