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

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {
  creditDataList: any;
  creditMenuList: any;
  creditPoint: any;

  contactData: any;
  marriageData: any;
  secondContactData: any;
  assetDocsData: any;
  jobData: any;
  constructor(
    private router: Router, 
    private creditService: CreditService,
    private modalController: ModalController
    ) { }

  ngOnInit() {
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

  onOpenRegCredit() {
    this.router.navigate(['/regcredit'])
  }

  async openModalBills(){
    const modal = await this.modalController.create({
      component: ModalBillsComponent
    });
    return await modal.present();
  }

  async openModalCreditPoint(){
    const modal = await this.modalController.create({
      component: ModalCreditPointComponent,
      componentProps: {
        'creditPoint': this.creditPoint
      }
    });
    return await modal.present();
  }

  async openModalMenu(item){
    console.log(item);
    if(item === "ข้อมูลผู้ติดต่อ"){
      const modal = await this.modalController.create({
        component: ModalContactComponent,
        componentProps: {
          'contact': this.contactData
        }
      });
      return await modal.present();
    }
    if(item === "สถานภาพสมรส"){
      const modal = await this.modalController.create({
        component: ModalMarriageComponent,
        componentProps: {
          'marriage': this.marriageData
        }
      });
      return await modal.present();
    }
    if(item === "บุคคลติดต่อฉุกเฉิน"){
      const modal = await this.modalController.create({
        component: ModalSecondcontactComponent,
        componentProps: {
          'secondContact': this.secondContactData
        }
      });
      return await modal.present();
    }
    if(item === "เอกสารสินทรัพย์"){
      const modal = await this.modalController.create({
        component: ModalAssetdocsComponent,
        componentProps: {
          'assetDocs': this.assetDocsData
        }
      });
      return await modal.present();
    }
    if(item === "ข้อมูลอาชีพ"){
      const modal = await this.modalController.create({
        component: ModalJobComponent,
        componentProps: {
          'job': this.jobData
        }
      });
      return await modal.present();
    }
  }

}
