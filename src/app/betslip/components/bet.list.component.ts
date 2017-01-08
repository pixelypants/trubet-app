import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Bet } from '../../models/bet.model';

@Component({
  selector: 'app-bet-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="bets">
      <app-bet *ngFor="let bet of bets" [bet]="bet"></app-bet>
    </div>
  `,
})
export class BetListComponent {
  @Input() bets: Bet[];
}
