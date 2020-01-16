import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterSelectcheckPageRoutingModule } from './footer-selectcheck-routing.module';

import { FooterSelectcheckPage } from './footer-selectcheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterSelectcheckPageRoutingModule
  ],
  declarations: [FooterSelectcheckPage],
  exports: [FooterSelectcheckPage]
})
export class FooterSelectcheckPageModule {}
