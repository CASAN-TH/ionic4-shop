import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditService } from './credit.service';

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
  constructor(private router: Router, private creditService: CreditService) { }

  ngOnInit() {
    this.creditService.onCreditDataListChanged.subscribe((creditDataList: any) => {
      // console.log(creditDataList);
      this.creditDataList = creditDataList;
    });
    this.creditService.onCreditMenuListChanged.subscribe((menu: any) => {
      this.creditMenuList = menu;
      console.log(this.creditMenuList);
    });
    this.creditService.onCreditPointChanged.subscribe((point: any) => {
      this.creditPoint = point
      console.log(this.creditPoint);
    });

    this.creditService.onContactDataChanged.subscribe((contact: any) => {
      this.contactData = contact
      console.log(this.contactData);
    });
    this.creditService.onMarriageDataChanged.subscribe((marriage) => {
      this.marriageData = marriage
      console.log(this.marriageData);
    });
    this.creditService.onSecondContactDataChanged.subscribe((secondContact) => {
      this.secondContactData = secondContact
      console.log(this.secondContactData);
    });
    this.creditService.onAssetDocsDataChanged.subscribe((assetDocs) => {
      this.assetDocsData = assetDocs
      console.log(this.assetDocsData);
    });
    this.creditService.onJobDataChanged.subscribe((job) => {
      this.jobData = job
      console.log(this.jobData);
    });
  }

  onOpenRegCredit() {
    this.router.navigate(['/regcredit'])
  }

}
