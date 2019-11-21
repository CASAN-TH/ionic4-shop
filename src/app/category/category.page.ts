import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from './category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  // @ViewChild("Content") content: Content;
  data: any;

  constructor(private router: Router, private categoryService: CategoryService) { }



  ngOnInit() {
    this.categoryService.onCategoryDataListChanged.subscribe((categoryDataList: any) => {
      console.log(categoryDataList);
      this.data = categoryDataList;
    })
  }

  onBrandClick(categoryId: any, brandId: any) {
    this.router.navigateByUrl('search/' + categoryId + '/' + brandId);
  }

  // scrollTo(element:string) {
  //   let yOffset = document.getElementById("14423").offsetTop;
  //   this.content.scrollTo(0, yOffset, 4000)
  // }

}
