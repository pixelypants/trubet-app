import { Injectable } from '@angular/core';
import { StateUpdates, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Bet } from '../models/bet.model';
import { BetDataService } from './bet.data.service';
import { Actions } from '../models/actions.const';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class BetEffectsService {
  constructor(private betDataService: BetDataService, private updates$: StateUpdates<any>) { }

  // tslint:disable-next-line:member-ordering
  @Effect() update$ = this.updates$
    .whenAction(Actions.ADD_BET, Actions.UPDATE_BET)
    .map(update => update.state.bets)
    .mergeMap(bets => Observable.from(bets))
    .filter((bet: Bet) => { return (bet.dirty === true); })
    .switchMap((updatedBet: Bet) => this.betDataService.addBet(updatedBet)
      .map((responseBet: Bet) => ({ type: Actions.UPDATE_BET_FROM_SERVER, payload: { bet: responseBet } }))
      .catch(() => Observable.of({ type: Actions.UPDATE_FAILED }))
    );

  @Effect() init$ = this.updates$
    .whenAction(Actions.INIT_BETS)
    .switchMap(() => this.betDataService.getBets().mergeMap(bets => Observable.from(bets))
      .map(res => ({ type: 'ADD_NOTE_FROM_SERVER', payload: res }))
      .catch(() => Observable.of({ type: 'FETCH_FAILED' }))
    );


}
