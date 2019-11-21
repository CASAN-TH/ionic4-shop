import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchData: any;

  constructor(private router: Router, private searchService: SearchService) { }

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

}
