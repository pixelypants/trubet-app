import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import * as models from '../../assets/trubet-sports-ng2-client/model/models';

import 'rxjs/add/operator/do';
import { Bet } from '../models/bet.model';
import { BetTypes } from '../models/betTypes.enum';
import { BetService } from '../services/bet.service';

@Component({
  selector: 'app-racing',
  templateUrl: './racing.component.html',
  styleUrls: ['./racing.component.css']
})
export class RacingComponent implements OnInit {

  // betService: BetService;

  bet: Bet = {
    'id': 12333,
    'title': 'Magic Mystery Bet',
    'description': 'You know you want to!',
    'cost': 666,
    'betType': BetTypes.Racing,
    'dirty': false
  };

  constructor(private betService: BetService) {
    //  this.betService = betService;
  }

  ngOnInit() {
  }

  addBet(bet: Bet) {
    this.betService.addBet(bet.title, bet.description, bet.cost, bet.betType);
  }

  get title() {
    return this.bet.title;
  }

  get description() {
    return this.bet.description;
  }

  get cost() {
    return this.bet.cost;
  }
}
