import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AcceptModalComponent } from 'src/app/payment/accept-modal/accept-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-checkout-total',
  templateUrl: './checkout-total.component.html',
  styleUrls: ['./checkout-total.component.scss'],
})
export class CheckoutTotalComponent implements OnInit {

  @Input() typeSelect: any;
  @Input() downDataList: any;
  @Input() cartDataList: any;
  @Input() creditPoint: any;
  @Input() creditCurrency: any;
  @Input() AddaddressData: any;
  @Input() acceptClick: boolean;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {

  }

  onOrderClick() {
    if (!this.acceptClick) {
      this.acceptModal();
    } else {
      this.router.navigate(['payfor'])
    }
  }

  acceptModal(): void {
    const dialogRef = this.dialog.open(AcceptModalComponent, {
      width: '500px',
      height: '120px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      message: 'กรุณาเพิ่มที่อยู่จัดส่งใหม่',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: (blah) => {
          }
        }, {
          text: 'เพิ่ม',
          handler: () => {
            this.router.navigate(['addaddress'])
          }
        }
      ]
    });
    await alert.present();
  }

  onOrderClick2() {
    this.router.navigate(['payfor'])
  }

}
