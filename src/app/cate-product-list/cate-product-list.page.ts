import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cate-product-list',
  templateUrl: './cate-product-list.page.html',
  styleUrls: ['./cate-product-list.page.scss'],
  inputs: ["recive_data"]
})
export class CateProductListPage implements OnInit {
  
  @Input() recive_data: Array<any>
  
  constructor() { }

  ngOnInit() {
  }

}
