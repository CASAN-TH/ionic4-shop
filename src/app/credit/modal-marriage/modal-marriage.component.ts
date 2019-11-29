import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-modal-marriage',
  templateUrl: './modal-marriage.component.html',
  styleUrls: ['./modal-marriage.component.scss'],
})
export class ModalMarriageComponent implements OnInit {

  @Input() marriage: any;
  constructor(
    private modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    console.log(this.marriage);
  }

  onDismiss(){
    this.modalCtrl.dismiss();
  }

  onFinish() {
    console.log(this.marriage);
    this.modalCtrl.dismiss();
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "สถานภาพสมรส",
      buttons: [{
        text: "โสด",
        handler: () => {
          this.marriage.marriage = "โสด";
        }
      }, {
        text: "แต่งงานแล้ว",
        handler: () => {
          this.marriage.marriage = "แต่งงานแล้ว";
        }
      }, {
        text: "แยกกันอยู่",
        handler: () => {
          this.marriage.marriage = "แยกกันอยู่";
        }
      }, {
        text: "อย่าร้าง",
        handler: () => {
          this.marriage.marriage = "อย่าร้าง";
        }
      }]
    });
    await actionSheet.present();
  }

}
