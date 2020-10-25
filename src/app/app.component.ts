import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { User } from './user';
import { AuthService } from './auth/auth.service';
import { ranks } from './ranks'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser;
  ranksT = ranks;
  user: User = {
    name: 'Jan',
    rank: 4,
    level:10,
    howManyTrees:10,
    amountOfCO2:10,
    userKM:10,
    userXP:10
  };
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Rozpocznij przygodę!',
      url: '/home',
      icon: 'paper-plane'
    },
    {
      title: 'Profil',
      url: '/user-profile',
      icon: 'person'
    },
    {
      title: 'Osiągnięcia',
      url: '/achievements',
      icon: 'star'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.url.split('/')[1] === path.toLowerCase());
    }
  }

  logout() {
    this.authService.logout();
  }
}
