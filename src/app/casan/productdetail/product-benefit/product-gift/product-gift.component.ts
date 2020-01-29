import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-gift',
  templateUrl: './product-gift.component.html',
  styleUrls: ['./product-gift.component.scss'],
})
export class ProductGiftComponent implements OnInit {

  @Input() recivedata: any;
  @Output() openpromotionGift = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  promotiongiftModal() {
    this.openpromotionGift.emit();
  }

}
