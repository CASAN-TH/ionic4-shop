import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-product-type',
  templateUrl: './search-product-type.component.html',
  styleUrls: ['./search-product-type.component.scss'],
})
export class SearchProductTypeComponent implements OnInit {
  
  cate2Selected: any;
  @Input() recivedata: any
  @Output() openProductType = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  onCetegoryClick(cate2Id: any) {
    this.cate2Selected = cate2Id;
    this.openProductType.emit(cate2Id);
  }
}
