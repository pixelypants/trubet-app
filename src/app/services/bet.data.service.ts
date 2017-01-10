import { Injectable } from '@angular/core';
import { Bet } from '../models/bet.model';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class BetDataService {

  private API_ROOT: String = 'http://localhost:3000';
  private JSON_HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

  constructor(public http: Http) { }

  getBets(): Observable<Array<Bet>> {
    return this.http.get(`${this.API_ROOT}/bets`)
      .map((response: Response) => response.json());
  }

  addBet(bet: Bet): Observable<Bet> {
    return this.http.post(`${this.API_ROOT}/bets`, JSON.stringify(bet), this.JSON_HEADER)
      .map((response: Response) => response.json());
  }

  updateBet(bet: Bet): Observable<Bet> {
    if (bet.id) {
      return this.http.put(`${this.API_ROOT}/bets/${bet.id}`, JSON.stringify(bet), this.JSON_HEADER)
        .map((response: Response) => response.json())
    }
  }
}
