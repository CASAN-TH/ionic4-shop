import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalCameraComponent } from 'src/app/modals/modal-camera/modal-camera.component';

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
    console.log(this.job);
    this.modalCtrl.dismiss();
  }

  async openCamera(status) {
    if (status === 'student') {
      const modal = await this.modalCtrl.create({
        component: ModalCameraComponent
      });
      modal.onDidDismiss().then(url => {
        // console.log(url.data)
        this.job.jobdata.student.imagecard = url.data.url
        // console.log(this.job)
      });
      return await modal.present();
    }
    if (status === 'other') {
      const modal = await this.modalCtrl.create({
        component: ModalCameraComponent
      });
      modal.onDidDismiss().then(url => {
        // console.log(url.data)
        this.job.jobdata.other.payslip = url.data.url
        // console.log(this.job)
      });
      return await modal.present();
    }
  }

  onDeleteImg(status) {
    if (status === 'student') {
      this.job.jobdata.student.imagecard = "";
    }
    if (status === 'other') {
      this.job.jobdata.other.payslip = "";
    }
  }

}
