import { User } from './user.model';
import { BetSlip } from './betslip.model';

export interface AppState {
  user: User;
  betSlip: BetSlip;
}
