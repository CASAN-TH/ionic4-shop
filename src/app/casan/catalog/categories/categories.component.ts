import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {

  data: any;
  tabSelected: any;

  @Input() recivedata: any

  // @Output() openSlide = new EventEmitter();
  // @Output() openBrand = new EventEmitter();
  // @Output() openPromotion = new EventEmitter();

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

  // onCoverImage(i: any, j: any) {
  //   this.openSlide.emit({i : i, j : j});
  // }
  // onBrandClick(categoryId: any, brandId: any) {
  //   this.openBrand.emit({categoryId :categoryId, brandId: brandId});
  // }
  // onPromotionClick(cate2Id: any) {
  //   this.openPromotion.emit(cate2Id);
  // }

  onBrandClick(categoryId: any, brandId: any) {
    this.router.navigateByUrl('search/' + categoryId + '/' + brandId);
  }

  onPromotionClick(cate2Id: any) {
    this.router.navigateByUrl('search/' + cate2Id);
  }

  onCoverImage(i: any, j: any) {
    if (this.data[i].cover_image[j].type_promotion === 'page') {
      //  console.log("a");
      console.log(this.data[i].cover_image[j].type_promotion);
      this.router.navigateByUrl(this.data[i].cover_image[j].link_promotion);
    } else {
      // console.log("b");
      this.router.navigate(['/promotion']);
    }
  }

}
