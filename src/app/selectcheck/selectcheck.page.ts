import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectcheck',
  templateUrl: './selectcheck.page.html',
  styleUrls: ['./selectcheck.page.scss'],
  inputs: ["recivedata"]
})
export class SelectcheckPage implements OnInit {

  @Input() recivedata: any;

  constructor() { }

  ngOnInit() {

    console.log(this.recivedata);

  }

  onCategories(selectcheckId: any) {
    console.log("onCategories" + selectcheckId);
  }
  onBrands(selectcheckId: any) {
    console.log("onBrands" + selectcheckId);
  }
  onPriceranges(selectcheckId: any) {
    console.log("onPriceranges" + selectcheckId);
  }

}
