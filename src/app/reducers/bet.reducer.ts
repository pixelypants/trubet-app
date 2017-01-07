import { Action } from '@ngrx/store';
import { Bet } from '../models/bet.model';
import { Actions } from '../models/actions.const';

export const BetReducer = (bet: Bet = null, action: Action) => {
  switch (action.type) {
    case Actions.ADD_BET:
      return Object.assign({}, action.payload, { dirty: true });
    // Actions initiated from the backend  
    case Actions.ADD_BET_FROM_SERVER:
      return Object.assign({}, action.payload, { dirty: false });
    case Actions.UPDATE_BET_FROM_SERVER:
      if (bet.id === action.payload.bet.id) {
        return Object.assign({}, action.payload.bet, { dirty: false });
      } else {
        return bet;
      }
    /* falls through */
    default:
      return bet;
  }
};
