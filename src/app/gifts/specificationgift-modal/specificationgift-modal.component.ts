import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-specificationgift-modal',
  templateUrl: './specificationgift-modal.component.html',
  styleUrls: ['./specificationgift-modal.component.scss'],
})
export class SpecificationgiftModalComponent implements OnInit {

  @Input() SpecificationgiftData: any
  specColorSelected: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss();
  }

  onspecColorClick(specColorId: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(specColorId);
    this.specColorSelected = specColorId;
  }

}
