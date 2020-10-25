import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserSettingsModalComponent } from '../user-settings-modal/user-settings-modal.component';
import { FriendsModalComponent } from './friends-modal/friends-modal.component';
import { User } from '../../user';
import { AchievementModalComponent } from './achievement-modal/achievement-modal.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  currentUser: User  
  progress: number;
  levelXP: number;
  constructor(private modalCtrl: ModalController) { }


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: UserSettingsModalComponent
    });

    await modal.present()
  }

  async openModalFriends() {
    const modal = await this.modalCtrl.create({
      component: FriendsModalComponent
    });
    await modal.present()
  }

  async openModalAchiev() {
    const modal = await this.modalCtrl.create({
      component: AchievementModalComponent
    });
    await modal.present()
  }

  ngOnInit() {
    this.currentUser = {
      name: "Jan",
      rank: "Leśny dzban",
      level: 3,
      howManyTrees: 56,
      amountOfCO2: 1.7,
      userKM: 11,
      userXP: 50,
    }
    this.progress = this.currentUser.userXP / this.levelXP;
  }

}
