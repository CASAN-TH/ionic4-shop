import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-share',
  templateUrl: './product-share.component.html',
  styleUrls: ['./product-share.component.scss'],
})
export class ProductShareComponent implements OnInit {

  @Output() openShare = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  shareModal() {
    this.openShare.emit();
  }

}
