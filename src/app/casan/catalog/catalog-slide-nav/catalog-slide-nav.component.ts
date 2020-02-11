import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-catalog-slide-nav',
  templateUrl: './catalog-slide-nav.component.html',
  styleUrls: ['./catalog-slide-nav.component.scss'],
})
export class CatalogSlideNavComponent implements OnInit {

  @ViewChild('content', { static: false }) private content: any;
  data: any;
  tabSelected: any;

  @Input() recivedata: any;
  @Output() openMenu = new EventEmitter();

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.onCategoryDataListChanged.subscribe((categoryDataList: any) => {
      // console.log(categoryDataList);
      this.data = categoryDataList;
      if (this.data.length > 0) {
        // console.log(this.data)
        this.tabSelected = this.data[0]._id;
        console.log(this.data[0]._id);
      }
    })
  }

  onMenuClick(cate_id) {
    this.tabSelected = cate_id;
    this.openMenu.emit(cate_id)
  }

  // onMenuClick(cate_id) {
  //     this.tabSelected = cate_id;
  //     let yOffset = document.getElementById(cate_id).offsetTop;
  //     let yHOffset = document.getElementById(cate_id).offsetHeight;
  //     // console.log(yOffset + " : " + yHOffset);
  //     this.content.scrollToPoint(0, yOffset, 1000);
  //   }

}
