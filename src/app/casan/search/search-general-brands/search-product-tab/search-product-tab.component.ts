import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-product-tab',
  templateUrl: './search-product-tab.component.html',
  styleUrls: ['./search-product-tab.component.scss'],
})
export class SearchProductTabComponent implements OnInit {

  @Input() recivedata: any

  constructor() { }

  ngOnInit() {

  }
}
