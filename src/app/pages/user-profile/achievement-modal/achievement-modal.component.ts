import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-achievement-modal',
  templateUrl: './achievement-modal.component.html',
  styleUrls: ['./achievement-modal.component.scss'],
})
export class AchievementModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal() { 
    this.modalCtrl.dismiss();
  }
}
