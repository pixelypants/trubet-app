import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Bet } from '../models/bet.model';
import { BetDataService } from '../services/bet.data.service';
import { ActionTypes } from '../models/action.types.const';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Action } from '@ngrx/store';

@Injectable()
export class BetEffectsService {
  constructor(private betDataService: BetDataService, private actions$: Actions) { }

  // tslint:disable-next-line:member-ordering
  @Effect()
  update$: Observable<Action> = this.actions$
    .ofType(ActionTypes.ADD_BET, ActionTypes.UPDATE_BET)
    .map(action => action.payload)
    .mergeMap(bets => Observable.from(bets))
    .filter((bet: Bet) => { return (bet.dirty === true); })
    .switchMap((updatedBet: Bet) => this.betDataService.addBet(updatedBet)
      .map((responseBet: Bet) => ({ type: ActionTypes.UPDATE_BET_FROM_SERVER, payload: { bet: responseBet } }))
      .catch(() => Observable.of({ type: ActionTypes.UPDATE_FAILED }))
    );

  @Effect()
  init$: Observable<Action> = this.actions$
    .ofType(ActionTypes.INIT_BETS)
    .switchMap(() => this.betDataService.getBets().mergeMap(bets => Observable.from(bets))
      .map(res => ({ type: ActionTypes.ADD_BET_FROM_SERVER, payload: res }))
      .catch(() => Observable.of({ type: ActionTypes.FETCH_FAILED }))
    );

}
