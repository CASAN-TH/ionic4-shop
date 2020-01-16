import { ScrollDetail } from '@ionic/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditService } from './credit.service';
import { ModalController } from '@ionic/angular';
import { ModalCreditPointComponent } from './modal-credit-point/modal-credit-point.component';
import { ModalContactComponent } from './modal-contact/modal-contact.component';
import { ModalMarriageComponent } from './modal-marriage/modal-marriage.component';
import { ModalSecondcontactComponent } from './modal-secondcontact/modal-secondcontact.component';
import { ModalAssetdocsComponent } from './modal-assetdocs/modal-assetdocs.component';
import { ModalJobComponent } from './modal-job/modal-job.component';
import { Location } from '@angular/common'

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {
  creditDataList: any;
  creditMenuList: any;
  bill: any;
  creditPoint: any;
  showToolbar = false;

  numeral = require('numeral');
  creditCurrency: any;

  url: any;
  status: any;

  contactData: any;
  marriageData: any;
  secondContactData: any;
  assetDocsData: any;
  jobData: any;
  constructor(
    private router: Router,
    private creditService: CreditService,
    private modalController: ModalController,
    private _location: Location,
  ) { }

  ngOnInit() {
    this.url = this.router.url
    this.creditService.onCreditMenuListChanged.subscribe((menu: any) => {
      this.creditMenuList = menu;
      // console.log(this.creditMenuList);
    });
    this.creditService.onBillChanged.subscribe((cusBill: any) => {
      this.bill = cusBill;
      // console.log(this.bill);
    });
    this.creditService.onCreditPointChanged.subscribe((point: any) => {
      this.creditPoint = point
      // console.log(this.creditPoint.credit.creditremain);
      const dataNum = this.numeral(this.creditPoint.credit.creditremain).format('0,0');
      // console.log(dataNum)
      this.creditCurrency = dataNum
      // console.log(this.creditCurrency)
    });
    this.creditService.onCreditStatusChanged.subscribe((status: any) => {
      this.status = status;
      // console.log(this.status)
    })

    this.creditService.onContactDataChanged.subscribe((contact: any) => {
      this.contactData = contact
      // console.log(this.contactData);
    });
    this.creditService.onMarriageDataChanged.subscribe((marriage) => {
      this.marriageData = marriage
      // console.log(this.marriageData);
    });
    this.creditService.onSecondContactDataChanged.subscribe((secondContact) => {
      this.secondContactData = secondContact
      // console.log(this.secondContactData);
    });
    this.creditService.onAssetDocsDataChanged.subscribe((assetDocs) => {
      this.assetDocsData = assetDocs
      // console.log(this.assetDocsData);
    });
    this.creditService.onJobDataChanged.subscribe((job) => {
      this.jobData = job
      // console.log(this.jobData);
    });
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 27;
    }
  }

  onOpenRegCredit() {
    this.router.navigate(['/regcredit'])
  }

  async openModalBills() {
    this.router.navigate(['/bill'])
  }

  async openModalCreditPoint() {
    const modal = await this.modalController.create({
      component: ModalCreditPointComponent,
      componentProps: {
        'creditPoint': this.creditPoint
      }
    });
    return await modal.present();
  }

  async openModalMenu(item) {
    console.log(item);
    if (item === "ข้อมูลผู้ติดต่อ") {
      const modal = await this.modalController.create({
        component: ModalContactComponent,
        componentProps: {
          'contact': this.contactData
        }
      });
      modal.onDidDismiss().then(async data => {
        this.contactData = data.data
        if (this.contactData.msgstatus === true) {
          this.contactData.msgstatus = false
          console.log('Do not save')
        } else {
          if (this.contactData._id) {
            console.log('update')
            this.creditService.updateContact(this.contactData)
          } else {
            console.log('create')
            this.creditService.createContact(this.contactData)
          }
        }
      })
      return await modal.present();
    }
    if (item === "สถานภาพสมรส") {
      const modal = await this.modalController.create({
        component: ModalMarriageComponent,
        componentProps: {
          'marriage': this.marriageData
        }
      });
      modal.onDidDismiss().then(async data => {
        this.marriageData = data.data
        if (this.marriageData.msgstatus === true) {
          this.marriageData.msgstatus = false
          console.log('Do not save')
        } else {
          if (this.marriageData._id) {
            console.log('update')
            this.creditService.updateMarriage(this.marriageData)
          } else {
            console.log('create')
            this.creditService.createMarriage(this.marriageData)
          }
        }
      })
      return await modal.present();
    }
    if (item === "บุคคลติดต่อฉุกเฉิน") {
      const modal = await this.modalController.create({
        component: ModalSecondcontactComponent,
        componentProps: {
          'secondContact': this.secondContactData
        }
      });
      modal.onDidDismiss().then(async data => {
        this.secondContactData = data.data
        if (this.secondContactData.msgstatus === true) {
          this.secondContactData.msgstatus = false
          console.log('Do not save')
        } else {
          if (this.secondContactData._id) {
            console.log('update')
            this.creditService.updateSecondContact(this.secondContactData)
          } else {
            console.log('create')
            this.creditService.createSecondContact(this.secondContactData)
          }
        }
      })
      return await modal.present();
    }
    if (item === "เอกสารสินทรัพย์") {
      const modal = await this.modalController.create({
        component: ModalAssetdocsComponent,
        componentProps: {
          'assetDocs': this.assetDocsData
        }
      });
      modal.onDidDismiss().then(async data => {
        this.assetDocsData = data.data
        if (this.assetDocsData.msgstatus === true) {
          this.assetDocsData.msgstatus = false
          console.log('Do not save')
        } else {
          if (this.assetDocsData._id) {
            console.log('update')
            this.creditService.updateAssetDocs(this.assetDocsData)
          } else {
            console.log('create')
            this.creditService.createAssetDocs(this.assetDocsData)
          }
        }
      });
      return await modal.present();
    }
    if (item === "ข้อมูลอาชีพ") {
      const modal = await this.modalController.create({
        component: ModalJobComponent,
        componentProps: {
          'job': this.jobData
        }
      });
      modal.onDidDismiss().then(async data => {
        this.jobData = data.data
        if (this.jobData.msgstatus === true) {
          this.jobData.msgstatus = false
          console.log('Do not save')
        } else {
          if (this.jobData._id) {
            console.log('update')
            this.creditService.updateJob(this.jobData)
          } else {
            console.log('create')
            this.creditService.createJob(this.jobData)
          }
        }
      })
      return await modal.present();
    }
  }

  goBackClick() {
    this._location.back();
  }

}
