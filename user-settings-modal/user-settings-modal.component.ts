import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-settings-modal',
  templateUrl: './user-settings-modal.component.html',
  styleUrls: ['./user-settings-modal.component.scss'],
})
export class UserSettingsModalComponent implements OnInit {

  constructor(private  modalCtrl: ModalController) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  dismissModal() { 
    this.modalCtrl.dismiss();
  }

  changePasswd() {
    
  }
  
  changeName() {

  }

  changeMail() {

  }

  privateSetts() {

  }

  deleteAccount() {
    
  }
}
