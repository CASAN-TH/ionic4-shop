import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ModalCameraComponent } from 'src/app/modals/modal-camera/modal-camera.component';

@Component({
  selector: 'app-modal-job',
  templateUrl: './modal-job.component.html',
  styleUrls: ['./modal-job.component.scss'],
})
export class ModalJobComponent implements OnInit {

  @Input() job: any;
  constructor(
    private modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    //this for string backup
    console.log(this.job);
    if (this.job.jobdata.type === '') {
      this.job.jobdata.type = "นักเรียน"
    }
  }

  onDismiss(){
    this.modalCtrl.dismiss();
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

  async openActionJob() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "ประเภทอาชีพ",
      buttons: [{
        text: "นักเรียน",
        handler: () => {
          this.job.jobdata.type = "นักเรียน"
        }
      }, {
        text: "อื่นๆ",
        handler: () => {
          this.job.jobdata.type = "อื่นๆ"
        }
      }]
    });
    await actionSheet.present();
  }

  async openActionDegree() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "วุฒิการศึกษา",
      buttons: [{
        text: "ต่ำกว่า ปวส.",
        handler: () => {
          this.job.jobdata.student.degree = "ต่ำกว่า ปวส."
        }
      }, {
        text: "ปริญญาตรี",
        handler: () => {
          this.job.jobdata.student.degree = "ปริญญาตรี"
        }
      }, {
        text: "ปริญญาตรี(ใบที่2)",
        handler: () => {
          this.job.jobdata.student.degree = "ปริญญาตรี(ใบที่2)"
        }
      }, {
        text: "ปริญญาเอก",
        handler: () => {
          this.job.jobdata.student.degree = "ปริญญาเอก"
        }
      }, {
        text: "ปริญญาโท",
        handler: () => {
          this.job.jobdata.student.degree = "ปริญญาโท"
        }
      }, {
        text: "ปวส.",
        handler: () => {
          this.job.jobdata.student.degree = "ปวส."
        }
      }]
    });
    await actionSheet.present();
  }

  async openActionLevel() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "ชั้นปี",
      buttons: [{
        text: "1",
        handler: () => {
          this.job.jobdata.student.level = "1"
        }
      }, {
        text: "2",
        handler: () => {
          this.job.jobdata.student.level = "2"
        }
      }, {
        text: "3",
        handler: () => {
          this.job.jobdata.student.level = "3"
        }
      }, {
        text: "4",
        handler: () => {
          this.job.jobdata.student.level = "4"
        }
      }, {
        text: "5",
        handler: () => {
          this.job.jobdata.student.level = "5"
        }
      }, {
        text: "6",
        handler: () => {
          this.job.jobdata.student.level = "6"
        }
      }]
    });
    await actionSheet.present();
  }

  async openActionExperience() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "ระยะเวลาทำงาน",
      buttons: [{
        text: "น้อยกว่า1ปี",
        handler: () => {
          this.job.jobdata.other.experience = "น้อยกว่า1ปี"
        }
      }, {
        text: "1-3ปี",
        handler: () => {
          this.job.jobdata.other.experience = "1-3ปี"
        }
      }, {
        text: "3-6ปี",
        handler: () => {
          this.job.jobdata.other.experience = "3-6ปี"
        }
      }, {
        text: "มากกว่า6ปี",
        handler: () => {
          this.job.jobdata.other.experience = "มากกว่า6ปี"
        }
      }]
    });
    await actionSheet.present();
  }

  async openActionDegreeOther() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "วุฒิการศึกษา",
      buttons: [{
        text: "ต่ำกว่า ปวส.",
        handler: () => {
          this.job.jobdata.other.degree = "ต่ำกว่า ปวส."
        }
      }, {
        text: "ปริญญาตรี",
        handler: () => {
          this.job.jobdata.other.degree = "ปริญญาตรี"
        }
      }, {
        text: "ปริญญาตรี(ใบที่2)",
        handler: () => {
          this.job.jobdata.other.degree = "ปริญญาตรี(ใบที่2)"
        }
      }, {
        text: "ปริญญาเอก",
        handler: () => {
          this.job.jobdata.other.degree = "ปริญญาเอก"
        }
      }, {
        text: "ปริญญาโท",
        handler: () => {
          this.job.jobdata.other.degree = "ปริญญาโท"
        }
      }, {
        text: "ปวส.",
        handler: () => {
          this.job.jobdata.other.degree = "ปวส."
        }
      }]
    });
    await actionSheet.present();
  }

  async openActionSalary() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "รายได้เงินเดือน",
      buttons: [{
        text: "น้อยกว่า10,000",
        handler: () => {
          this.job.jobdata.other.salary = "น้อยกว่า10,000"
        }
      }, {
        text: "10,001-15,000",
        handler: () => {
          this.job.jobdata.other.salary = "10,001-15,000"
        }
      }, {
        text: "15,001-30,000",
        handler: () => {
          this.job.jobdata.other.salary = "15,001-30,000"
        }
      }, {
        text: "มากกว่า30,000",
        handler: () => {
          this.job.jobdata.other.salary = "มากกว่า30,000"
        }
      }]
    });
    await actionSheet.present();
  }

}
