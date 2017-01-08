import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Bet } from '../models/bet.model';
import { Observable } from 'rxjs/Observable';
import { BetService } from '../services/bet.service';

@Component({
  selector: 'app-betslip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-bet-list 
      [bets]="bets$ | async">
    </app-bet-list>
  `,
  styles: []
})

export class BetslipComponent implements OnInit {
  bets$: Observable<Bet[]>;
  betService: BetService;

  constructor(betService: BetService) {
    this.betService = betService;
    this.bets$ = betService.getBets();
  }

  ngOnInit() {
    this.betService.initialise();
  }

}
