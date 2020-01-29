import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-slide',
  templateUrl: './product-slide.component.html',
  styleUrls: ['./product-slide.component.scss'],
})
export class ProductSlideComponent implements OnInit {

  @Input() recivedata: Array<any>;

  constructor() { }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };

  ngOnInit() {}

}
