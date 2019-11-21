import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchData: any;

  constructor(private router: Router, private searchService: SearchService, private _location: Location) { }

  ngOnInit() {
    this.searchService.onSearchDataListChanged.subscribe((searchDataList: any) => {
      console.log(searchDataList);
      this.searchData = searchDataList;
    })
  }

  onConditionClick(cate2Id: any) {
    this.router.navigateByUrl('search/' + cate2Id);
  }

  onProductItemClick() {
    console.log("onProductItemClick");
  }

  goBackClick() {
    this._location.back();
  }

}
