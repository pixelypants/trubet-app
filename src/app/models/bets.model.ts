enum Types {
  Racing
  , Sports
  ,
}

export interface Bet {
  title: string;
  description: string;
  cost: number;
  type: Types;
}
