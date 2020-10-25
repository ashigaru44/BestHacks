import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import {nextAchievmentXP, nextAchievmentTrees,nextAchievmentSteps, ranks, XPmultiplier} from '../../ranks'

@Component({
  selector: 'app-achievments',
  templateUrl: './achievments.component.html',
  styleUrls: ['./achievments.component.scss'],
})
export class AchievmentsComponent implements OnInit {
  currentUser: User;
  nextSteps: number;
  nextTrees: number;
  nextXP: number;
  achievments: Array<string>;
  indexes;
  levelXP: number;
  progress: number;
  constructor() { }

  ngOnInit() {
    this.currentUser = {  //get user from database
      name: "string", 
      rank: 5,
      level: 3,
      howManyTrees: 56,
      amountOfCO2: 1.7,
      userKM: 11,
      userXP: 50,
    };
    this.levelXP = this.currentUser.level * XPmultiplier;
    this.progress = this.currentUser.userXP / this.levelXP;
    this.indexes = Array(this.currentUser.level).fill(0);
    this.nextSteps = nextAchievmentSteps.find((el) => el > this.currentUser.userKM * 1250);
    this.nextTrees = nextAchievmentTrees.find((el) => el > this.currentUser.howManyTrees);
    this.nextXP = nextAchievmentXP.find((el) => el > this.currentUser.userXP);
    console.log(ranks.length);
    this.achievments = [`Przejdź ${this.nextSteps} kroków`, `Posadź ${this.nextTrees} drzew`, `Zdobądź ${this.nextXP} punktów`, `Następna ranga: ${this.currentUser.rank + 2 > ranks.length ? 'Już najwyższa!' : ranks[this.currentUser.rank + 1] }`];
  }

}
