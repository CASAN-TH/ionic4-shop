import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionSlideComponent } from './promotion-slide/promotion-slide.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PromotionGeneralShortcutComponent } from './promotion-general-shortcut/promotion-general-shortcut.component';



@NgModule({
  declarations: [
    PromotionGeneralShortcutComponent,
    PromotionSlideComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports:[
    PromotionGeneralShortcutComponent,
    PromotionSlideComponent
  ]
})
export class PromotionModule { }
