import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../models/state.model';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private store: Store<AppState>) { }

  getUser(): Observable<User> {
    return this.store.select<User>('user');
  }
}
