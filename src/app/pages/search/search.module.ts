import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SearchPageRoutingModule } from "./search-routing.module";

import { SearchPage } from "./search.page";
import { MatTabsModule } from "@angular/material/tabs";
// import { ProductlistPageModule } from 'src/app/productlist/productlist.module';
import { SelectcheckPageModule } from 'src/app/selectcheck/selectcheck.module';
import { FooterSelectcheckPageModule } from 'src/app/footer-selectcheck/footer-selectcheck.module';
import { CatalogModule } from 'src/app/casan/catalog/catalog.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    // ProductlistPageModule,
    MatTabsModule,
    SelectcheckPageModule,
    FooterSelectcheckPageModule,
    CatalogModule

  ],
  declarations: [SearchPage]
})
export class SearchPageModule {}
