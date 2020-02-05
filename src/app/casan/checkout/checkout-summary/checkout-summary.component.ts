import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.scss'],
})
export class CheckoutSummaryComponent implements OnInit {

  @Input() cartDataList: any;
  constructor() { }

  ngOnInit() {

  }

}
