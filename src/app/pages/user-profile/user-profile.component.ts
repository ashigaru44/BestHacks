import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserSettingsModalComponent } from '../user-settings-modal/user-settings-modal.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: UserSettingsModalComponent
    });

    await modal.present()
  }

  ngOnInit() {}

 
}
