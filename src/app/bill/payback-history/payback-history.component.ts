import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payback-history',
  templateUrl: './payback-history.component.html',
  styleUrls: ['./payback-history.component.scss'],
})
export class PaybackHistoryComponent implements OnInit {

  @Input() paybackData: any

  constructor() { }

  ngOnInit() {
    console.log(this.paybackData)
  }

}
