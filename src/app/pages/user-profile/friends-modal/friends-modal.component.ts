import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-friends-modal',
  templateUrl: './friends-modal.component.html',
  styleUrls: ['./friends-modal.component.scss'],
})
export class FriendsModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal() { 
    this.modalCtrl.dismiss();
  }
}
