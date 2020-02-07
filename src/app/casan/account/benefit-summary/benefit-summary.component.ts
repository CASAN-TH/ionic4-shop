import { Component, OnInit, Input } from '@angular/core';
import { ModalCreditPointComponent } from 'src/app/credit/modal-credit-point/modal-credit-point.component';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MyCouponComponent } from './my-coupon/my-coupon.component';
import { CashBackComponent } from './cash-back/cash-back.component';

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

  async MyCouponModal() {
    const modal = await this.modalController.create({
      component: MyCouponComponent,
    });
    return await modal.present();
  }

  async CurrentAmountModal() {
    const modal = await this.modalController.create({
      component: CashBackComponent,
      componentProps: {
        accountData: this.accountData
      }
    });
    return await modal.present();
  }
  

}
