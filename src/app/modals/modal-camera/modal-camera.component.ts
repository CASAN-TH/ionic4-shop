import { Component, OnInit, Input } from "@angular/core";
import { ModalController, Platform } from "@ionic/angular";

import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions
} from "@ionic-native/camera-preview/ngx";

@Component({
  selector: "app-modal-camera",
  templateUrl: "./modal-camera.component.html",
  styleUrls: ["./modal-camera.component.scss"]
})
export class ModalCameraComponent implements OnInit {
  @Input() modalData: any
  constructor(
    private modalCtrl: ModalController,
    private platform: Platform,
    private cameraPreview: CameraPreview
  ) {
    this.initializeCamera();
  }

  ngOnInit() {}

  dismiss() {
    let result = {
      url: ""
    };
    switch(this.modalData.actionType) { 
      case "back": { 
         //statements; 
         result.url = "https://f.ptcdn.info/508/051/000/oqq2ql7cd9PSpE5ufV7-o.jpg";
         break; 
      } 
      case "withme": { 
         //statements; 
         result.url = "https://f.ptcdn.info/300/023/000/1410407472-b2-o.jpg";
         break; 
      } 
      case "regular": { 
        //statements; 
        result.url = "https://spcdn.springnews.co.th/wp-content/uploads/2019/03/53046686_2149103205167393_4156877401579585536_n-1.jpg";
        break; 
     } 
      default: { 
         //statements; 
         result.url = "https://www.admission.nu.ac.th/student/citizencard.jpg";
         break; 
      } 
   } 
    if(this.modalData.actionType)
    //
    this.modalCtrl.dismiss(result);
  }

  initializeCamera() {
    this.platform.ready().then(() => {
      const cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: "back",
        tapPhoto: false,
        previewDrag: false,
        toBack: true,
        alpha: 1
      };
      this.cameraPreview.startCamera(cameraPreviewOpts).then(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    });
  }
}
