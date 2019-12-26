import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PayforService } from '../payfor.service';
import { BankModalComponent } from '../bank-modal/bank-modal.component';

@Component({
  selector: 'app-debit-credit-card-modal',
  templateUrl: './debit-credit-card-modal.component.html',
  styleUrls: ['./debit-credit-card-modal.component.scss'],
})
export class DebitCreditCardModalComponent implements OnInit {

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

}
