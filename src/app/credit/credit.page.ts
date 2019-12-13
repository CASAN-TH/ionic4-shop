import { ScrollDetail } from '@ionic/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditService } from './credit.service';
import { ModalController } from '@ionic/angular';
import { ModalBillsComponent } from './modal-bills/modal-bills.component';
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
  creditPoint: any;
  showToolbar = false;

  url: any;

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
    console.log(this.url);
    this.creditService.onCreditDataListChanged.subscribe((creditDataList: any) => {
      // console.log(creditDataList);
      this.creditDataList = creditDataList;
    });
    this.creditService.onCreditMenuListChanged.subscribe((menu: any) => {
      this.creditMenuList = menu;
      // console.log(this.creditMenuList);
    });
    this.creditService.onCreditPointChanged.subscribe((point: any) => {
      this.creditPoint = point
      // console.log(this.creditPoint);
    });

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
      console.log($event)
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 27;
    }
  }

  onOpenRegCredit() {
    this.router.navigate(['/regcredit'])
  }

  async openModalBills() {
    const modal = await this.modalController.create({
      component: ModalBillsComponent
    });
    return await modal.present();
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
      modal.onDidDismiss().then(async data=>{
        this.contactData = data.data
        const res = await this.creditService.updateContact(this.contactData)
        console.log(res);
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
      modal.onDidDismiss().then(async data=>{
        this.marriageData = data.data
        const res = await this.creditService.updateMarriage(this.marriageData)
        console.log(res);
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
      modal.onDidDismiss().then(async data =>{
        this.secondContactData = data.data
        const res = await this.creditService.updateSecondContact(this.secondContactData)
        console.log(res);
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
        const res = await this.creditService.updateAssetDocs(this.assetDocsData)
        console.log(res);
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
        const res = await this.creditService.updateJob(this.jobData)
        console.log(res);
      })
      return await modal.present();
    }
  }

  goBackClick(){
    this._location.back();
  }

}
