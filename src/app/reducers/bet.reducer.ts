import { Action } from '@ngrx/store';
import { Bet } from '../models/bet.model';
import { ActionTypes } from '../models/action.types.const';

export const BetReducer = (bet: Bet = null, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_BET:
      return Object.assign({}, action.payload, { dirty: true });
    // Actions initiated from the backend  
    case ActionTypes.ADD_BET_FROM_SERVER:
      return Object.assign({}, action.payload, { dirty: false });
    case ActionTypes.UPDATE_BET_FROM_SERVER:
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
