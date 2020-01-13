import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss'],
})
export class PaymentHistoryComponent implements OnInit {

  @Input() tabNav: any

  constructor() { }

  ngOnInit() {
    console.log(this.tabNav)
  }

}
