import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentMethodRecommentComponent } from 'src/app/casan/payment/payment-method-recomment/payment-method-recomment.component';

@Component({
  selector: 'app-online-bank-list',
  templateUrl: './online-bank-list.component.html',
  styleUrls: ['./online-bank-list.component.scss'],
})
export class OnlineBankListComponent implements OnInit {

  @Input() onlinebankingData: any;
  @Input() payforData: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

  onSelectcheckboxBankClick(SelectcheckboxBankId: any) {
    console.log(SelectcheckboxBankId);
  }
  onSelectcheckboxBank_OtherClick(SelectcheckboxBank_Other: any) {
    console.log(SelectcheckboxBank_Other);
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
