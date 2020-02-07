import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AboutAppComponent } from './about-app/about-app.component';
import { LanguageComponent } from './language/language.component';
import { Router } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';

@Component({
  selector: 'app-system-setting',
  templateUrl: './system-setting.component.html',
  styleUrls: ['./system-setting.component.scss'],
})
export class SystemSettingComponent implements OnInit {

  @Input() AboutData: any

  constructor(private router: Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  async aboutModal() {
    const modal = await this.modalController.create({
      component: AboutAppComponent,
      componentProps: {
      AboutData: this.AboutData
      }
    });
    return await modal.present();
  }

  async languageModal() {
    const modal = await this.modalController.create({
      component: LanguageComponent,
    });
    return await modal.present();
  }

  async feedbackModal() {
    const modal = await this.modalController.create({
      component: FeedbackComponent,
    });
    return await modal.present();
  }

  onToLogout() {
    console.log("log out");
  }

  onToMePage() {
    this.router.navigate(['me']);
  }

}
