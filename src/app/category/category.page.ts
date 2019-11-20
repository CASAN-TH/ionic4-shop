import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from './category.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  @ViewChild('content', { static: false }) private content: any;
  data: any;
  tabSelected: any;
  constructor(private router: Router, private categoryService: CategoryService) { }



  ngOnInit() {
    this.categoryService.onCategoryDataListChanged.subscribe((categoryDataList: any) => {
      console.log(categoryDataList);
      this.data = categoryDataList;
      if (this.data.cate_data) {
        this.tabSelected = this.data.cate_data[0]._id;
      }

    })
  }

  onMenuClick(cate_id) {

    this.tabSelected = cate_id;
    let yOffset = document.getElementById(cate_id).offsetTop;
    // let yHOffset = document.getElementById(cate_id).offsetHeight
    // if (yOffset > 0) {
    //   yOffset = yOffset + yHOffset;
    // }
    console.log(yOffset);
    this.content.scrollToPoint(0, yOffset, 1000);
    // this.content.scrollToBottom();
    // this.content.scrollTo(yOffset)
  }

  onBrandClick(categoryId: any, brandId: any) {
    this.router.navigateByUrl('search/' + categoryId + '/' + brandId);
  }

  scrollTo(element: string) {

  }

}
