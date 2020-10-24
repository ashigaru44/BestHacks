import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-achievments',
  templateUrl: './achievments.component.html',
  styleUrls: ['./achievments.component.scss'],
})
export class AchievmentsComponent implements OnInit {
  currentUser: User
  achievments = ['Przejdź 1000 kroków', 'Posadź 100 drzew', 'Zdobądź 1000 punktów', 'Następna ranga: Obieżyświat']
  indexes
  levelXP = 100


  constructor() { }

  ngOnInit() {
    this.currentUser = {
      name: "string",
      rank: "drwal",
      level: 3,
      howManyTrees: 56,
      amountOfCO2: 1.7,
      userKM: 11,
      userSteps: 1758,
      userXP: 50,
      progress: 0.5
    }
    this.indexes = Array(this.currentUser.level).fill(0);
  }

}
