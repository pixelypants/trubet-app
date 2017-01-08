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
    <div *ngIf="bet">
      <span>{{id}}</span>
      <span>{{title}}</span>
      <span>{{description}}</span>
      <span>{{cost}}</span>
    </div>
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
