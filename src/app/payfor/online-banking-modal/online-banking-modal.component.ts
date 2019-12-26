import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecommendedMethodModalComponent } from '../recommended-method-modal/recommended-method-modal.component';

@Component({
  selector: 'app-online-banking-modal',
  templateUrl: './online-banking-modal.component.html',
  styleUrls: ['./online-banking-modal.component.scss'],
})
export class OnlineBankingModalComponent implements OnInit {

  @Input() onlinebankingData: any; payforData: any;

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
      component: RecommendedMethodModalComponent,
      componentProps: {
        // ReviewData: this.ReviewData
      }
    });
    return await modal.present();
  }

}
