import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BillModalComponent } from 'src/app/casan/payment/counter-service-list/bill-modal/bill-modal.component';
@Component({
  selector: 'app-counter-service-list',
  templateUrl: './counter-service-list.component.html',
  styleUrls: ['./counter-service-list.component.scss'],
})
export class CounterServiceListComponent implements OnInit {

  @Input() counter_paymentData: any; payforData: any;
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }

  onCounterServiceClick(CounterServiceId: any) {
    console.log(CounterServiceId);
  }
  
  onCounterBankClick(CounterBankId: any) {
    console.log(CounterBankId);
  }

  async BillModal() {
    const modal = await this.modalController.create({
      component: BillModalComponent,
      componentProps: {
        // counter_paymentData: this.counter_paymentData,
        // payforData: this.payforData
      }
    });
    return await modal.present();
  }

}
