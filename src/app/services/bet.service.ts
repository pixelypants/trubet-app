import { Injectable } from '@angular/core';
import { Actions } from '../models/actions.const';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { AppState } from '../models/state.model';
import { BetTypes } from '../models/betTypes.enum';
import 'node-uuid';
import { Bet } from '../models/bet.model';
import { Observable } from 'rxjs/Observable';

declare let uuid; // this is a hack to stop Typescript compilation problems when addressing the globally available uuid interface

@Injectable()
export class BetService {

  constructor(private store: Store<AppState>) { }

  initialise(): void {
    this.store.dispatch({ type: Actions.INIT_BETS, payload: {} });
  }

  getBets(): Observable<Bet[]> {
    return this.store.select<Bet[]>('bets');
  }

  addBet(title: string, description: string, cost: number, betType: BetTypes): void {
    // tslint:disable-next-line:max-line-length
    this.store.dispatch({ type: Actions.ADD_BET, payload: { title: title, description: description, cost: cost, betType: betType, id: uuid.v1() } });
  }
}
