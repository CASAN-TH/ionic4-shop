import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductdetailService } from 'src/app/productdetail/productdetail.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-voucher',
  templateUrl: './product-voucher.component.html',
  styleUrls: ['./product-voucher.component.scss'],
})
export class ProductVoucherComponent implements OnInit {

  @Input() recivedata: any;
  @Output() openVoucher = new EventEmitter();

  constructor(
    private productdetailService: ProductdetailService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.recivedata)
  }

  voucherModal() {
    this.openVoucher.emit();
  }

}
