import { Component, OnInit } from "@angular/core";
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
  constructor(
    private modalCtrl: ModalController,
    private platform: Platform,
    private cameraPreview: CameraPreview
  ) {
    this.initializeCamera();
  }

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss({
      url: "https://www.admission.nu.ac.th/student/citizencard.jpg"
    });
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
