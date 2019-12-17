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
      // console.log(categoryDataList);
      this.data = categoryDataList;
      if (this.data.length > 0) {
        // console.log(this.data)
        this.tabSelected = this.data[0]._id;
      }

    })
  }

  onMenuClick(cate_id) {

    this.tabSelected = cate_id;
    let yOffset = document.getElementById(cate_id).offsetTop;
    let yHOffset = document.getElementById(cate_id).offsetHeight;
    // console.log(yOffset + " : " + yHOffset);
    this.content.scrollToPoint(0, yOffset, 1000);
    
  }

  onBrandClick(categoryId: any, brandId: any) {
    this.router.navigateByUrl('search/' + categoryId + '/' + brandId);
  }

  onPromotionClick(cate2Id: any) {
    this.router.navigateByUrl('search/' + cate2Id);
  }

  onCoverClick(coverId: any) {
    this.router.navigateByUrl('promotion/' + coverId);
  }

  scrollTo(element: string) {

  }

}
