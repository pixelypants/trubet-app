import { Action } from '@ngrx/store';
import { Bet } from '../models/bet.model';
import { Actions } from '../models/actions.const';
import { bet } from './bet.reducer';

export const bets = (bets: Array<Bet> = [], action: Action) => {
  switch (action.type) {
    case Actions.ADD_BET:
      return [...bets, bet(null, action)]
    default:
      return bets;
  }
}