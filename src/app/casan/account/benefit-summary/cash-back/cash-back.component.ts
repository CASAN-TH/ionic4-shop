import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cash-back',
  templateUrl: './cash-back.component.html',
  styleUrls: ['./cash-back.component.scss'],
})
export class CashBackComponent implements OnInit {

  @Input() currentamountData: any

  constructor() { }

  ngOnInit() {}

}
