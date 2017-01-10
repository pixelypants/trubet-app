import { User } from './user.model';
import { Bet } from './bet.model';

export interface AppState {
  user: User;
  bets: Array<Bet>;
}
