import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSlideComponent } from './product-slide/product-slide.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ProductSlideComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ProductSlideComponent]
})
export class ProductdetailModule { }
