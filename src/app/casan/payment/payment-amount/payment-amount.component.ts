import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-amount',
  templateUrl: './payment-amount.component.html',
  styleUrls: ['./payment-amount.component.scss'],
})
export class PaymentAmountComponent implements OnInit {

  @Input() paymentData: any;
  constructor() { }

  ngOnInit() {
  }

}
