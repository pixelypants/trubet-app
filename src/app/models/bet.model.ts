import { BetTypes } from './betTypes.enum';

export interface Bet {
  title: string;
  description: string;
  cost: number;
  betType: BetTypes;
  id: number;
  dirty: boolean;
}
