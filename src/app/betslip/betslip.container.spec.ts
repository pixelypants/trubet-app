/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BetslipComponent } from './betslip.container';
import { SharedModule } from '../shared/shared.module';
import { BetComponent } from './components/bet.component';
import { BetListComponent } from './components/bet.list.component';
import { BetService } from '../services/bet.service';

import * as APP_REDUCERS from '../reducers/reducers';
import { StoreModule } from '@ngrx/store';

describe('BetslipComponent', () => {
  let component: BetslipComponent;
  let fixture: ComponentFixture<BetslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, StoreModule.provideStore(APP_REDUCERS),],
      declarations: [BetslipComponent, BetComponent, BetListComponent],
      providers: [ BetService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
