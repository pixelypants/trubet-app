import { Bet } from './bets.model';

export interface BetSlip {
  bets: Bet[];
  total: number;
}
