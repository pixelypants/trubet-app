import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../models/state.model';
import { User } from '../models/user.model';
import { BetTypes } from '../models/betTypes.enum';
import { Actions } from '../models/actions.const';

import 'node-uuid';
declare let uuid; // this is a hack stop Typescript compilation problems when addressing the globally available uuid interface

@Injectable()
export class UserService {
  constructor(private store: Store<AppState>) { }

  getUser(): Observable<User> {
    return this.store.select<User>('user');
  }

  addBet(title: string, description: string, cost: number, betType: BetTypes): void {
    // tslint:disable-next-line:max-line-length
    this.store.dispatch({ type: Actions.ADD_BET, payload: { title: title, description: description, cost: cost, betType: betType, id: uuid.v1() } });
  }
}
