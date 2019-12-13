import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomeService } from "./home.service";
import { ScrollDetail } from "@ionic/core";
import { TranslateService } from "@ngx-translate/core";
import { locale as english } from "./i18n/en";
import { locale as thai } from "./i18n/th";
@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  homeDataList: any;
  homeReccommentData: any
  CateProductListData: any;
  showToolbar = false;


  constructor(
    private router: Router,
    private homeService: HomeService,
    private translateService: TranslateService
  ) {
    this.translateService.setTranslation(english.lang, english.data);
    this.translateService.setTranslation(thai.lang, thai.data);

  }

  ngOnInit() {
    this.homeService.onHomeDataListChanged.subscribe((homeDataList: any) => {
      console.log(homeDataList);
      this.homeDataList = homeDataList;
    });
    this.homeService.onHomeReccommentDataChanged.subscribe((homeDataList: any) => {
      console.log(homeDataList);
      this.homeReccommentData = homeDataList;
    });
    this.homeService.onCateProductListChanged.subscribe((CateProductListData: any) => {
      console.log(CateProductListData);
      this.CateProductListData = CateProductListData;
    });
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 141;
    }
  }


}
