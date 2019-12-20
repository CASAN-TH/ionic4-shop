import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RegcreditService } from "./regcredit.service";
import { MatDialog } from "@angular/material/dialog";
import { ModalCardComponent } from "./modals/modal-card/modal-card.component";
import { ModalController, ActionSheetController } from "@ionic/angular";
import { ModalCameraComponent } from "src/app/modals/modal-camera/modal-camera.component";
import { Location } from "@angular/common";

@Component({
  selector: "app-regcredit",
  templateUrl: "./regcredit.page.html",
  styleUrls: ["./regcredit.page.scss"]
})
export class RegcreditPage implements OnInit {
  regcreditDataList: any;
  regProfile: any;
  dataSecondContact: any;
  isTakeCamera: boolean = false;

  constructor(
    private router: Router,
    private regcreditService: RegcreditService,
    private dialog: MatDialog,
    public modalController: ModalController,
    private _location: Location,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    // this.regcreditService.onRegcreditDataListChanged.subscribe(
    //   (regcreditDataList: any) => {
    //     console.log(regcreditDataList);
    //     this.regcreditDataList = regcreditDataList;
    //   }
    // );
    this.regcreditService.onRegcreditProfileChanged.subscribe(
      (dataProfile: any) => {
        console.log(dataProfile);
        this.regProfile = dataProfile;
      }
    );
    this.regcreditService.onRegcreditSecondContactChanged.subscribe(
      (dataSecondContact: any) => {
        console.log(dataSecondContact);
        this.dataSecondContact = dataSecondContact;
      }
    );
  }

  onDeleteImg(i) {
    if (i === "frontcardimaged") {
      this.regProfile.frontcardimaged.url = "";
    }
    if (i === "backcardimaged") {
      this.regProfile.backcardimaged.url = "";
    }
    if (i === "personwithcardimaged") {
      this.regProfile.personwithcardimaged.url = "";
    }
  }

  async openActionGender() {
    const action = await this.actionSheetCtrl.create({
      header: 'เพศ',
      buttons: [{
        text: 'ชาย',
        handler: () => {
          this.regProfile.gender = 'ชาย'
        }
      }, {
        text: 'หญิง',
        handler: () => {
          this.regProfile.gender = 'หญิง'
        }
      }]
    });
    await action.present()
  }

  async onActionRelation() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "ความสัมพันธ์",
      buttons: [{
        text: "พ่อ",
        handler: () => {
          this.dataSecondContact.secondcontact[0].relation = "พ่อ";
        }
      }, {
        text: "แม่",
        handler: () => {
          this.dataSecondContact.secondcontact[0].relation = "แม่";
        }
      }, {
        text: "ญาติ",
        handler: () => {
          this.dataSecondContact.secondcontact[0].relation = "ญาติ";
        }
      }, {
        text: "เพื่อน",
        handler: () => {
          this.dataSecondContact.secondcontact[0].relation = "เพื่อน";
        }
      }, {
        text: "คู่สมรส",
        handler: () => {
          this.dataSecondContact.secondcontact[0].relation = "คู่สมรส";
        }
      }, {
        text: "ผู้ปกครอง",
        handler: () => {
          this.dataSecondContact.secondcontact[0].relation = "ผู้ปกครอง";
        }
      }]
    });
    await actionSheet.present();
  }

  onNext() {
    if (!this.regProfile._id) {
      console.log('create')
      this.regcreditService.createRegcreditProfileData(this.regProfile);
    } else {
      console.log('update')
      this.regcreditService.updateRegcreditProfileData(this.regProfile);
    }
  }

  async onFinish() {
    if (!this.dataSecondContact._id) {
      console.log('create')
      const res = await this.regcreditService.createSecondContactData(this.dataSecondContact);
      if (res) {
        const body = {
          accountstatus: "waitapprove"
        };
        const resStatus = await this.regcreditService.updateUser(body);
        console.log(resStatus)
        if (resStatus) {
          this._location.back();
        }
      }
    } else {
      console.log('update')
      const res = await this.regcreditService.updateSecondContactData(this.dataSecondContact);
      if (res) {
        const body = {
          accountstatus: "waitapprove"
        };
        const resStatus = await this.regcreditService.updateUser(body);
        console.log(resStatus)
        if (resStatus) {
          this._location.back();
        }
      }
    }
  }

  goBackClick() {
    this._location.back();
  }

  openModalCard(type): void {
    if (type === "front") {
      const dialogRef = this.dialog.open(ModalCardComponent, {
        width: "300px",
        data: { type: "front" }
      });
      dialogRef.afterClosed().subscribe(async result => {
        if (result === "oncamera") {
          this.isTakeCamera = true;
          const modal = await this.modalController.create({
            component: ModalCameraComponent,
            cssClass: 'modal-camera-style',
            componentProps: {
              modalData: {
                actionType: "front"
              }
            }
          });
          modal.onDidDismiss().then(url => {
            // console.log(url.data)
            this.isTakeCamera = false;
            this.regProfile.frontcardimaged = url.data;
            console.log(this.regProfile);
          });
          return await modal.present();
        }
      });
    } else if (type === "back") {
      const dialogRef = this.dialog.open(ModalCardComponent, {
        width: "300px",
        data: { type: "back" }
      });
      dialogRef.afterClosed().subscribe(async result => {
        if (result === "oncamera") {
          this.isTakeCamera = true;
          const modal = await this.modalController.create({
            component: ModalCameraComponent,
            cssClass: 'modal-camera-style',
            componentProps: {
              modalData: {
                actionType: "back"
              }
            }
          });
          modal.onDidDismiss().then(url => {
            // console.log(url.data)
            this.isTakeCamera = false;
            this.regProfile.backcardimaged = url.data;
            console.log(this.regProfile);
          });
          return await modal.present();
        }
      });
    } else {
      const dialogRef = this.dialog.open(ModalCardComponent, {
        width: "300px",
        data: { type: "withme" }
      });
      dialogRef.afterClosed().subscribe(async result => {
        if (result === "oncamera") {
          this.isTakeCamera = true;
          const modal = await this.modalController.create({
            component: ModalCameraComponent,
            cssClass: 'modal-camera-style',
            componentProps: {
              modalData: {
                actionType: "withme"
              }
            }
          });
          modal.onDidDismiss().then(url => {
            // console.log(url.data)
            this.isTakeCamera = false;
            this.regProfile.personwithcardimaged = url.data;
            console.log(this.regProfile);
          });
          return await modal.present();
        }
      });
    }
  }
}
