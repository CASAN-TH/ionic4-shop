import { Component, OnInit, Input } from '@angular/core';
import { ModalCreditPointComponent } from 'src/app/credit/modal-credit-point/modal-credit-point.component';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-benefit-summary',
  templateUrl: './benefit-summary.component.html',
  styleUrls: ['./benefit-summary.component.scss'],
})
export class BenefitSummaryComponent implements OnInit {

  @Input() accountData: any;
  @Input() creditData: any;
  @Input() scoreData: any;

  constructor(private router: Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  async creditPointModal() {
    const modal = await this.modalController.create({
      component: ModalCreditPointComponent,
      componentProps: {
        creditPoint: this.creditData
      }
    });
    return await modal.present();
  }

  onToMyCouponPage() {
    this.router.navigate(["my-coupon"]);
  }

  CurrentAmountPage() {
    this.router.navigate(["current-amount"]);
  }


  

}
