import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from './category.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  @ViewChild('content', { static: false }) private content: any;
  
  data: any;
  tabSelected: any;

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) { }

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

  onBrandClick(e: any) {
    this.router.navigateByUrl('search/' + e.categoryId + '/' + e.brandId);
  }

  onPromotionClick(cate2Id: any) {
    this.router.navigateByUrl('search/' + cate2Id);
  }

  onCoverImage(e: any) {
    if (this.data[e.i].cover_image[e.j].type_promotion === 'page') {
      //  console.log("a");
      console.log(this.data[e.i].cover_image[e.j].type_promotion);
      this.router.navigateByUrl(this.data[e.i].cover_image[e.j].link_promotion);
    } else {
      // console.log("b");
      this.router.navigate(['/promotion']);
    }
  }

  // scrollTo(element: string) {

  // }

}
