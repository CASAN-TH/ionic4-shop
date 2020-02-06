import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionShotcutComponent } from './promotion-shotcut/promotion-shotcut.component';
import { PromotionSlideComponent } from './promotion-slide/promotion-slide.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    PromotionShotcutComponent,
    PromotionSlideComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports:[
    PromotionShotcutComponent,
    PromotionSlideComponent
  ]
})
export class PromotionModule { }
