import { Action } from '@ngrx/store';
import { Bet } from '../models/bet.model';
import { Actions } from '../models/actions.const';
import { BetReducer } from './bet.reducer';

// Takes: state (Current) + action (Type and Payload)
// Returns: new state
// Note: ... unpacks collection and makes it a new deep copy
export const BetsReducer = (bets: Array<Bet> = [], action: Action) => {
  switch (action.type) {
    case Actions.ADD_BET:
      return [...bets, BetReducer(null, action)];
    case Actions.UPDATE_BET:
      return bets.map(bet => {
        return bet.id !== action.payload.id ?
          bet :
          Object.assign({}, bet, action.payload);
      });
    case Actions.REMOVE_BET:
      return bets.filter(bet => bet.id !== action.payload.id);
    default:
      return bets;
  }
};
