import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-specification-modal',
  templateUrl: './specification-modal.component.html',
  styleUrls: ['./specification-modal.component.scss'],
})
export class SpecificationModalComponent implements OnInit {

  specColorSelected: any;
  specImageSelected: any;
  specVertionSelected: any;

  @Input() SpecificationData: any

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.specColorSelected = this.SpecificationData.color
    this.specVertionSelected = this.SpecificationData.version
    this.specImageSelected = this.SpecificationData.image
    console.log(this.SpecificationData.image);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  onspecColorClick(specColorId: any, specImage: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(specColorId);
    this.specColorSelected = specColorId;
    this.SpecificationData.color = specColorId;
    this.SpecificationData.image = specImage;

  }

  onspecVertionClick(specVertionId: any) {
    // this.router.navigateByUrl('search/' + cate2Id);
    console.log(specVertionId);
    this.specVertionSelected = specVertionId;
    this.SpecificationData.version = specVertionId;
  }

}
