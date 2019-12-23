import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.page.html',
  styleUrls: ['./search-history.page.scss'],
})
export class SearchHistoryPage implements OnInit {

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

  goBackClick() {
    this._location.back();
  }

}
