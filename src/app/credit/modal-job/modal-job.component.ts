import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-job',
  templateUrl: './modal-job.component.html',
  styleUrls: ['./modal-job.component.scss'],
})
export class ModalJobComponent implements OnInit {

  @Input() job: any;
  constructor(
    private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.job);
  }

  onFinish() {
    this.modalCtrl.dismiss();
  }

}
