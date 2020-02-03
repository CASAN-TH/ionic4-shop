import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SelectdownModalComponent } from 'src/app/casan/checkout/checkout-type/selectdown-modal/selectdown-modal.component';

@Component({
  selector: 'app-checkout-type',
  templateUrl: './checkout-type.component.html',
  styleUrls: ['./checkout-type.component.scss'],
})
export class CheckoutTypeComponent implements OnInit {

  @Input() checkoutType: any;
  @Input() cartDataList: any;
  @Input() creditPoint: any;
  @Input() profilestatus: any;
  @Input() downDataList: any;
  @Input() selectdownData: any;
  @Input() acceptClick: boolean;

  @Output() typeBack: EventEmitter<any> = new EventEmitter();
  @Output() acceptBack: EventEmitter<any> = new EventEmitter();

  unitSelected: any;

  constructor(
    public actionSheetController: ActionSheetController,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'วิธีการชำระเงิน',
      buttons: [{
        text: 'ผ่อนชำระ',
        handler: () => {
          this.checkoutType = "ผ่อนชำระ";
          this.typeBack.emit("ผ่อนชำระ");
        }
      }, {
        text: 'ชำระเต็มจำนวนเงิน',
        handler: () => {
          this.checkoutType = "ชำระเต็มจำนวนเงิน";
          this.typeBack.emit("ชำระเต็มจำนวนเงิน");
        }
      }]
    });
    await actionSheet.present();
  }

  onAcceptClick() {
    this.acceptBack.emit(this.acceptClick);
  }

  async actionPayment() {
    if (this.cartDataList.totalcart.total_discount > this.creditPoint.credit.creditremain) {
      const actionSheet = await this.actionSheetController.create({
        header: 'วิธีการชำระเงิน',
        buttons: [{
          text: 'ชำระเต็มจำนวนเงิน',
          handler: () => {
            this.checkoutType = "ชำระเต็มจำนวนเงิน";
            this.typeBack.emit("ชำระเต็มจำนวนเงิน");
          }
        }]
      });
      await actionSheet.present();
    } else {
      const actionSheet = await this.actionSheetController.create({
        header: 'วิธีการชำระเงิน',
        buttons: [{
          text: 'ผ่อนชำระ',
          handler: () => {
            this.checkoutType = "ผ่อนชำระ";
            this.typeBack.emit("ผ่อนชำระ");
          }
        }, {
          text: 'ชำระเต็มจำนวนเงิน',
          handler: () => {
            this.checkoutType = "ชำระเต็มจำนวนเงิน";
            this.typeBack.emit("ชำระเต็มจำนวนเงิน");
          }
        }]
      });
      await actionSheet.present();
    }
  }

  onApplyForCredit() {
    this.router.navigateByUrl('credit');
  }

  async selectDownModal() {
    const modal = await this.modalController.create({
      component: SelectdownModalComponent,
      cssClass: 'my-modal-css',
      componentProps: {
        selectdownData: this.selectdownData
      }
    });
    return await modal.present();
  }

  onUnitClick(unitId: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(unitId);
    this.unitSelected = unitId;
  }
  onViewClick() {
    this.router.navigateByUrl('termsandcondition');
  }
}
