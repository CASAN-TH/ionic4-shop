import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-promotion-slide',
  templateUrl: './promotion-slide.component.html',
  styleUrls: ['./promotion-slide.component.scss'],
})
export class PromotionSlideComponent implements OnInit {

  @Input() recivedata: any
  @Output() openSlide = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  // openImageSlide(ij: any) {
  //   this.openSlide.emit(ij);
  // }
}
