import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PayforService } from 'src/app/payfor/payfor.service';
import { PaymentMethodRecommentComponent } from '../payment-method-recomment/payment-method-recomment.component';
import { BankModalComponent } from './bank-modal/bank-modal.component';

@Component({
  selector: 'app-credit-bank-list',
  templateUrl: './credit-bank-list.component.html',
  styleUrls: ['./credit-bank-list.component.scss'],
})
export class CreditBankListComponent implements OnInit {

  @Input() debitcreditcardData: any; bankData: any; payforData: any;

  constructor(private router: Router,
    private payforService: PayforService,
    public modalController: ModalController,
  ) { }


  ngOnInit() {
    this.payforService.onBankDataChanged.subscribe((payforDataList: any) => {
      // console.log(payforDataList);
      this.bankData = payforDataList;
      // console.log(this.bankData.Bankname);
      // console.log(this.DebitCreditCardData);
    })
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async BankModal() {
    const modal = await this.modalController.create({
      component: BankModalComponent,
      componentProps: {
        bankData: this.bankData
      }
    });
    return await modal.present();
  }

  async RecommendedMethodModal() {
    const modal = await this.modalController.create({
      component: PaymentMethodRecommentComponent,
      componentProps: {
        // ReviewData: this.ReviewData
      }
    });
    return await modal.present();
  }

}
