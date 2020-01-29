import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-tcoin',
  templateUrl: './product-tcoin.component.html',
  styleUrls: ['./product-tcoin.component.scss'],
})
export class ProductTcoinComponent implements OnInit {

  @Input() recivedata: any;
  @Output() openTcoin = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  tcoinModal() {
    this.openTcoin.emit();
  }

}
