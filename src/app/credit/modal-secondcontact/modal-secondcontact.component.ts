import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-modal-secondcontact',
  templateUrl: './modal-secondcontact.component.html',
  styleUrls: ['./modal-secondcontact.component.scss'],
})
export class ModalSecondcontactComponent implements OnInit {

  @Input() secondContact: any;

  datalength: any;
  mockup: any = {

  };
  sendBU: any;

  constructor(
    private modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    console.log(this.secondContact);
    this.sendBU = JSON.stringify(this.secondContact)
    this.datalength = this.secondContact.secondcontact.length;
  }

  onDismiss() {
    const getBU = JSON.parse(this.sendBU)
    getBU.msgstatus = true;
    console.log(getBU);
    this.modalCtrl.dismiss(getBU);
  }

  onFinish() {
    this.secondContact.secondcontact.push(this.mockup)
    console.log(this.secondContact);
    this.modalCtrl.dismiss(this.secondContact);
  }

  async openActionRelation(index) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "ความสัมพันธ์",
      buttons: [{
        text: "พ่อ",
        handler: () => {
          this.secondContact.secondcontact[index].relation = "พ่อ";
        }
      }, {
        text: "แม่",
        handler: () => {
          this.secondContact.secondcontact[index].relation = "แม่";
        }
      }, {
        text: "ญาติ",
        handler: () => {
          this.secondContact.secondcontact[index].relation = "ญาติ";
        }
      }, {
        text: "เพื่อน",
        handler: () => {
          this.secondContact.secondcontact[index].relation = "เพื่อน";
        }
      }, {
        text: "คู่สมรส",
        handler: () => {
          this.secondContact.secondcontact[index].relation = "คู่สมรส";
        }
      }, {
        text: "ผู้ปกครอง",
        handler: () => {
          this.secondContact.secondcontact[index].relation = "ผู้ปกครอง";
        }
      }]
    });
    await actionSheet.present();
  }

  async openActionJob(index) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "อาชีพ",
      buttons: [{
        text: "พนักงานบริษัทเอกชน(employee)",
        handler: () => {
          this.secondContact.secondcontact[index].job = "พนักงานบริษัทเอกชน(employee)"
        }
      }, {
        text: "ข้าราชการ(government officer)",
        handler: () => {
          this.secondContact.secondcontact[index].job = "ข้าราชการ(government officer)"
        }
      }]
    });
    await actionSheet.present();
  }

  async openActionSalary(index) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "รายได้",
      buttons: [{
        text: "น้อยกว่า10,000",
        handler: () => {
          this.secondContact.secondcontact[index].salary = "น้อยกว่า10,000"
        }
      }, {
        text: "10,001-15,000",
        handler: () => {
          this.secondContact.secondcontact[index].salary = "10,001-15,000"
        }
      }, {
        text: "15,001-30,000",
        handler: () => {
          this.secondContact.secondcontact[index].salary = "15,001-30,000"
        }
      }, {
        text: "มากกว่า30,000",
        handler: () => {
          this.secondContact.secondcontact[index].salary = "มากกว่า30,000"
        }
      }]
    });
    await actionSheet.present();
  }

  async onMockActionRelation() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "ความสัมพันธ์",
      buttons: [{
        text: "พ่อ",
        handler: () => {
          this.mockup.relation = "พ่อ";
        }
      }, {
        text: "แม่",
        handler: () => {
          this.mockup.relation = "แม่";
        }
      }, {
        text: "ญาติ",
        handler: () => {
          this.mockup.relation = "ญาติ";
        }
      }, {
        text: "เพื่อน",
        handler: () => {
          this.mockup.relation = "เพื่อน";
        }
      }, {
        text: "คู่สมรส",
        handler: () => {
          this.mockup.relation = "คู่สมรส";
        }
      }, {
        text: "ผู้ปกครอง",
        handler: () => {
          this.mockup.relation = "ผู้ปกครอง";
        }
      }]
    });
    await actionSheet.present();
  }

  async onMockActionJob() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "อาชีพ",
      buttons: [{
        text: "พนักงานบริษัทเอกชน(employee)",
        handler: () => {
          this.mockup.job = "พนักงานบริษัทเอกชน(employee)"
        }
      }, {
        text: "ข้าราชการ(government officer)",
        handler: () => {
          this.mockup.job = "ข้าราชการ(government officer)"
        }
      }]
    });
    await actionSheet.present();
  }

  async onMockActionSalary() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "รายได้",
      buttons: [{
        text: "น้อยกว่า10,000",
        handler: () => {
          this.mockup.salary = "น้อยกว่า10,000"
        }
      }, {
        text: "10,001-15,000",
        handler: () => {
          this.mockup.salary = "10,001-15,000"
        }
      }, {
        text: "15,001-30,000",
        handler: () => {
          this.mockup.salary = "15,001-30,000"
        }
      }, {
        text: "มากกว่า30,000",
        handler: () => {
          this.mockup.salary = "มากกว่า30,000"
        }
      }]
    });
    await actionSheet.present();
  }
}
