import { BetSlip } from './betslip.model';

export interface User {
  name: string;
  balance: number;
  betSlip: BetSlip;
}
