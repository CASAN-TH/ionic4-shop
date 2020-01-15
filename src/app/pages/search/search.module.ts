import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SearchPageRoutingModule } from "./search-routing.module";

import { SearchPage } from "./search.page";
import { MatTabsModule } from "@angular/material/tabs";
import { ProductlistPageModule } from 'src/app/productlist/productlist.module';
import { SelectcheckPageModule } from 'src/app/selectcheck/selectcheck.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    ProductlistPageModule,
    MatTabsModule,
    SelectcheckPageModule

  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
