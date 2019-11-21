import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegcreditService } from './regcredit.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalCardComponent } from './modals/modal-card/modal-card.component';
import { ModalController } from '@ionic/angular';
import { ModalCameraComponent } from 'src/app/modals/modal-camera/modal-camera.component';

@Component({
  selector: 'app-regcredit',
  templateUrl: './regcredit.page.html',
  styleUrls: ['./regcredit.page.scss'],
})
export class RegcreditPage implements OnInit {
  regcreditDataList: any;
  regProfile: any;
  dataSecondContact: any;


  constructor(
    private router: Router,
    private regcreditService: RegcreditService,
    private dialog: MatDialog,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.regcreditService.onRegcreditDataListChanged.subscribe((regcreditDataList: any) => {
      console.log(regcreditDataList);
      this.regcreditDataList = regcreditDataList;
    })
    this.regcreditService.onRegcreditProfileChanged.subscribe((dataProfile: any) => {
      console.log(dataProfile)
      this.regProfile = dataProfile
    })
    this.regcreditService.onRegcreditSecondContactChanged.subscribe((dataSecondContact: any) => {
      console.log(dataSecondContact)
      this.dataSecondContact = dataSecondContact
    })
  }

  onDeleteImg(i){
    if(i === "frontcardimaged"){
      this.regProfile.frontcardimaged.url = ""
    }
    if(i === "backcardimaged"){
      this.regProfile.backcardimaged.url = ""
    }
    if(i === "personwithcardimaged"){
      this.regProfile.personwithcardimaged.url = ""
    }
  }

  async onNext(){
    const res = await this.regcreditService.updateProfile(this.regProfile);
    console.log(res)
  }

  async onFinish() {
    const res = await this.regcreditService.updateSecondContact(this.dataSecondContact)
    console.log(res)
  }

  openModalCard(type): void {
    if (type === 'front') {
      const dialogRef = this.dialog.open(ModalCardComponent, {
        width: '300px',
        data: { "type": "front" }
      });
      dialogRef.afterClosed().subscribe(async result => {
        if(result === "oncamera"){
          const modal = await this.modalController.create({
            component: ModalCameraComponent,
            componentProps: {
              'test': 'test'
            }
          });
          modal.onDidDismiss().then(url =>{
            // console.log(url.data)
            this.regProfile.frontcardimaged = url.data
            console.log(this.regProfile)
          });
          return await modal.present();
        }
      });
    } else if (type === 'back') {
      const dialogRef = this.dialog.open(ModalCardComponent, {
        width: '300px',
        data: { "type": "back" }
      });
      dialogRef.afterClosed().subscribe(async result => {
        if(result === "oncamera"){
          const modal = await this.modalController.create({
            component: ModalCameraComponent,
            componentProps: {
              'test': 'test'
            }
          });
          modal.onDidDismiss().then(url =>{
            // console.log(url.data)
            this.regProfile.backcardimaged = url.data
            console.log(this.regProfile)
          });
          return await modal.present();
        }
      });
    } else {
      const dialogRef = this.dialog.open(ModalCardComponent, {
        width: '300px',
        data: { "type": "withme" }
      });
      dialogRef.afterClosed().subscribe(async result => {
        if(result === "oncamera"){
          const modal = await this.modalController.create({
            component: ModalCameraComponent,
            componentProps: {
              'test': 'test'
            }
          });
          modal.onDidDismiss().then(url =>{
            // console.log(url.data)
            this.regProfile.personwithcardimaged = url.data
            console.log(this.regProfile)
          });
          return await modal.present();
        }
      });
    }
  }
}
