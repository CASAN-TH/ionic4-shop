import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-block',
  templateUrl: './product-list-block.component.html',
  styleUrls: ['./product-list-block.component.scss'],
})
export class ProductListBlockComponent implements OnInit {

  @Input() recivedata: any
  constructor() { }

  ngOnInit() {
    console.log(this.recivedata)
  }

}
