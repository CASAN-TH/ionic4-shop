import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promotion-slide',
  templateUrl: './promotion-slide.component.html',
  styleUrls: ['./promotion-slide.component.scss'],
})
export class PromotionSlideComponent implements OnInit {

  @Input() recivedata: any
  constructor() { }

  ngOnInit() {}

}
