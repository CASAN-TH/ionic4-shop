import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectcheckPageRoutingModule } from './selectcheck-routing.module';

import { SelectcheckPage } from './selectcheck.page';
// import { CatalogModule } from '../casan/catalog/catalog.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectcheckPageRoutingModule
    // CatalogModule
  ],
  declarations: [SelectcheckPage],
  exports: [SelectcheckPage]
})
export class SelectcheckPageModule {}
