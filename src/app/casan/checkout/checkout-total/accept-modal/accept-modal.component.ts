import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-accept-modal',
  templateUrl: './accept-modal.component.html',
  styleUrls: ['./accept-modal.component.scss'],
})
export class AcceptModalComponent implements OnInit {

  constructor(public modalController: ModalController,
    private router: Router,
    public dialogRef: MatDialogRef<AcceptModalComponent>) { }

  ngOnInit() { }

  dismiss(): void {
    this.dialogRef.close();
  }
  onacceptClick(): void {
    this.router.navigate(['payfor']);
    this.dialogRef.close();
  }
}
