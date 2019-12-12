import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-list-block',
  templateUrl: './product-list-block.page.html',
  styleUrls: ['./product-list-block.page.scss'],
  inputs: ["recivedata"]
})
export class ProductListBlockPage implements OnInit {
  
  @Input() recivedata: any
  constructor() { }

  ngOnInit() {
  }

}
