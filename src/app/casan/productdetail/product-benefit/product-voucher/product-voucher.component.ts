import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-voucher',
  templateUrl: './product-voucher.component.html',
  styleUrls: ['./product-voucher.component.scss'],
})
export class ProductVoucherComponent implements OnInit {

  @Input() recivedata: any;
  @Output() openVoucher = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  voucherModal() {
    this.openVoucher.emit();
  }

}
