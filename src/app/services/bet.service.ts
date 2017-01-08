import { Injectable } from '@angular/core';
import { ActionTypes } from '../models/action.types.const';
import { Store } from '@ngrx/store';
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
    this.store.dispatch({ type: ActionTypes.INIT_BETS, payload: {} });
  }

  getBets(): Observable<Bet[]> {
    return this.store.select<Bet[]>('bets');
  }

  addBet(title: string, description: string, cost: number, betType: BetTypes): void {
    // tslint:disable-next-line:max-line-length
    this.store.dispatch({ type: ActionTypes.ADD_BET, payload: { title: title, description: description, cost: cost, betType: betType, id: uuid.v1() } });
  }
}
