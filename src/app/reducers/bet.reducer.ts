import { Action } from '@ngrx/store';
import { Bet } from '../models/bet.model';
import { Actions } from '../models/actions.const';

export const BetReducer = (bet: Bet = null, action: Action) => {
  switch (action.type) {
    case Actions.ADD_BET:
      return Object.assign({}, action.payload, { dirty: true });
    default:
      return bet;
  }
};
