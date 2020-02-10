import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-payment',
  templateUrl: './product-payment.component.html',
  styleUrls: ['./product-payment.component.scss'],
})
export class ProductPaymentComponent implements OnInit {

  @Input() recivedata: any;
  @Output() openPayment = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  paymentModal() {
    this.openPayment.emit();
  }

}
