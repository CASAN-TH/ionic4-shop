import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentModalComponent } from 'src/app/productdetail/payment-modal/payment-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-totalcart',
  templateUrl: './totalcart.component.html',
  styleUrls: ['./totalcart.component.scss'],
})
export class TotalcartComponent implements OnInit {

  @Input() totalCartDataList: any;
  @Input() paymentData: any;
  constructor(
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() { }

  onSelectAll() {
    console.log("select all")
  }

  async installmentModal() {
    const modal = await this.modalController.create({
      component: PaymentModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        PaymentData: this.paymentData
      }
    });
    return await modal.present();
  }

  onPayClick() {
    this.router.navigate(['payment'])
  }

}
