import { Action } from '@ngrx/store';
import { Bet } from '../models/bet.model';
import { ActionTypes } from '../models/action.types.const';
import { BetReducer } from './bet.reducer';

// Takes: state (Current) + action (Type and Payload)
// Returns: new state
// Note: ... unpacks collection and makes it a new deep copy
export const BetsReducer = (bets: Array<Bet> = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_BET:
    case ActionTypes.ADD_BET_FROM_SERVER:
      return [...bets, BetReducer(null, action)];
    case ActionTypes.UPDATE_BET:
      return bets.map(bet => {
        return bet.id !== action.payload.id ?
          bet :
          Object.assign({}, bet, action.payload);
      });
    case ActionTypes.REMOVE_BET:
      return bets.filter(bet => bet.id !== action.payload.id);
    default:
      return bets;
  }
};
