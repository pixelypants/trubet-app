import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Bet } from '../../models/bet.model';

@Component({
  selector: 'app-bet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ngb-alert type="info" *ngIf="bet">
      <strong>{{title}}</strong>
      <span>{{description}}</span>
      <strong>{{ cost | currency:"USD":true }}</strong>
    </ngb-alert>
  `,
})
export class BetComponent {

  @Input() bet: Bet;
  @Output() add = new EventEmitter<Bet>();
  @Output() remove = new EventEmitter<Bet>();

  get id() {
    return this.bet.id;
  }

  get title() {
    return this.bet.title;
  }

  get description() {
    return this.bet.description;
  }

  get cost() {
    return this.bet.cost;
  }
}
