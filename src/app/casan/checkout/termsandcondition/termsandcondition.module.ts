import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsandconditionPageRoutingModule } from './termsandcondition-routing.module';

import { TermsandconditionPage } from './termsandcondition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsandconditionPageRoutingModule
  ],
  declarations: [TermsandconditionPage]
})
export class TermsandconditionPageModule {}
