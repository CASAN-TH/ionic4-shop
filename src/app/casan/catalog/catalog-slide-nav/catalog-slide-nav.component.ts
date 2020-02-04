import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-catalog-slide-nav',
  templateUrl: './catalog-slide-nav.component.html',
  styleUrls: ['./catalog-slide-nav.component.scss'],
})
export class CatalogSlideNavComponent implements OnInit {

  @Input() recivedata: any
  // @Output() openSlide = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  // openSlideNav(productId: any) {
  //   this.openSlide.emit(productId);
  // }

}
